const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const getByPartitionKey = partitionKey => {
  let candidate = typeof partitionKey !== "string" ?
    JSON.stringify(partitionKey)
    : partitionKey;

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate
}

exports.deterministicPartitionKey = (input) => {
  if (!input) {
    return TRIVIAL_PARTITION_KEY;
  }
  
  const { partitionKey } = input
  
  if (partitionKey) {
    return getByPartitionKey(partitionKey);
  }
  
  const data = JSON.stringify(input);
  return crypto.createHash("sha3-512").update(data).digest("hex");
};
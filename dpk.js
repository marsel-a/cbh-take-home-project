const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (input) => {
  if (!input) {
    return TRIVIAL_PARTITION_KEY;
  }
  
  let candidate;
  const { partitionKey } = input
  
  if (partitionKey) {
    candidate = typeof partitionKey !== "string" ?
      JSON.stringify(partitionKey)
      : partitionKey;
  } else {
    const data = JSON.stringify(input);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
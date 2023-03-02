const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns partitionKey if partitionKey is in the input object", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "85c8e1faa5976ba974e21211a495ed9579bb524c7bb02f7e881f422aac660183c386abe78b5b335be5db137165ce95bd26406ffefe2d43119b815a3008fcb085"});
    expect(trivialKey).toBe("85c8e1faa5976ba974e21211a495ed9579bb524c7bb02f7e881f422aac660183c386abe78b5b335be5db137165ce95bd26406ffefe2d43119b815a3008fcb085");
  });
  it("Returns partitionKey if partitionKey length is equal to 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "hnl98tgna0mecjm1z1hs7kzsz5zoqpbu1ttpw5stkm7yngh56jz2k9pnexn26fpk7kyopvylpkgw1ulii1wwuaelt1w7sc4j82pyfa5bld0fv7uy3thfz773tgmxmah8k5q72ubz1aa13lxlkwwolp46h7v2rj25tc4d3fvy4o7xgs3s34uey6jv1zxmc4ktyqqc56vmed8vi2fyczwq6qia6gkdpsgs2dd0gklb0bzhaww4hug8mgj6lskf7quq"});
    expect(trivialKey).toBe("hnl98tgna0mecjm1z1hs7kzsz5zoqpbu1ttpw5stkm7yngh56jz2k9pnexn26fpk7kyopvylpkgw1ulii1wwuaelt1w7sc4j82pyfa5bld0fv7uy3thfz773tgmxmah8k5q72ubz1aa13lxlkwwolp46h7v2rj25tc4d3fvy4o7xgs3s34uey6jv1zxmc4ktyqqc56vmed8vi2fyczwq6qia6gkdpsgs2dd0gklb0bzhaww4hug8mgj6lskf7quq");
  });
  it("Returns hash by input object", () => {
    const trivialKey = deterministicPartitionKey({data: "123"});
    expect(trivialKey).toBe("337bcbb974bfee05ef99dc5f04f2d48fc1f328ea5bc02dbdac01c12a0a1b8e02a7877efda0af22d54144d97ca549d2da772cae3db5c15771f9b64b22ea1a1ef3");
  });
  it("Returns stringified object when partitionKey is an object", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: {data: "123"}});
    expect(trivialKey).toBe("{\"data\":\"123\"}");
  });
  it("Returns new key if the partitionKey length is more than 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "hnl98tgna0mecjm1z1hs7kzsz5zoqpbu1ttpw5stkm7yngh56jz2k9pnexn26fpk7kyopvylpkgw1ulii1wwuaelt1w7sc4j82pyfa5bld0fv7uy3thfz773tgmxmah8k5q72ubz1aa13lxlkwwolp46h7v2rj25tc4d3fvy4o7xgs3s34uey6jv1zxmc4ktyqqc56vmed8vi2fyczwq6qia6gkdpsgs2dd0gklb0bzhaww4hug8mgj6lskf7quq123"});
    expect(trivialKey).toBe("7c9b4959e608a8fff568651acafccc162b7bcde22dc4094d3859c0d1a0198784bf310c0037a53f64fbfa443d0236e718437a4e87df370a11e7ea98b96a449bfe");
  });
});

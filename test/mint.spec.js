let unoptimized;
let optimized;
let golden_optimized;
console.log("baseline: 69292");
describe("Open Zeppelin", () => {
  beforeEach(async () => {
    const OZ = await ethers.getContractFactory("OZ");
    unoptomized = await OZ.deploy();
  });

  it("regular mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await unoptomized
      .safeMint(acc1.address, 1)
      .then((tx) => tx.wait());
    const t1 = await unoptomized
      .safeMint(acc1.address, 2)
      .then((tx) => tx.wait());

    // const tx = await t.wait();
    // const tx1 = await t1.wait();
    console.log("\t t1 Gas Used", t.gasUsed);
    console.log("\t t2 Gas Used", t1.gasUsed);
  });
});

describe("Optimized", () => {
  beforeEach(async () => {
    const Optimized = await ethers.getContractFactory("Optimized");
    optimized = await Optimized.deploy();
  });
  it("Optimized mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await optimized.safeMint(acc2.address, 3).then((tx) => tx.wait());
    const t1 = await optimized
      .safeMint(acc2.address, 4)
      .then((tx) => tx.wait());
    console.log("\t t1 Gas Used", t.gasUsed);
    console.log("\t t2 Gas Used", t1.gasUsed);
  });
});

describe("Genetic Chain @Papaver", () => {
  beforeEach(async () => {
    const Golden = await ethers.getContractFactory("Golden");
    golden_optimized = await Golden.deploy();
  });
  it("papaver mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await golden_optimized
      .safeMint(acc1.address)
      .then((tx) => tx.wait());
    const t1 = await golden_optimized
      .safeMint(acc2.address)
      .then((tx) => tx.wait());
    const t2 = await golden_optimized
      .safeMint(acc2.address)
      .then((tx) => tx.wait());
    console.log("\t Token 0 Gas Used", t.gasUsed);
    console.log("\t t2 Gas Used", t1.gasUsed);
    console.log("\t t3 Gas Used", t2.gasUsed);
  });
});

describe("Nuclear Nerds: Mason Chance", () => {
  beforeEach(async () => {
    const MC = await ethers.getContractFactory("MasonChance");
    masonChance = await MC.deploy();
  });
  it("Mason CHance mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await masonChance
      .safeMint(acc1.address, 1)
      .then((tx) => tx.wait());
    const t1 = await masonChance
      .safeMint(acc2.address, 1)
      .then((tx) => tx.wait());
    const t2 = await masonChance
      .safeMint(acc2.address, 1)
      .then((tx) => tx.wait());
    console.log("\t Token 0 Gas Used", t.gasUsed);
    console.log("\t t2 Gas Used", t1.gasUsed);
    console.log("\t t3 Gas Used", t2.gasUsed);
  });
});

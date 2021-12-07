let unoptimized;
let optimized;
console.log("baseline: 69292");
describe("Open Zeppelin", () => {
  beforeEach(async () => {
    const OZ = await ethers.getContractFactory("OZ");
    unoptomized = await OZ.deploy();
  });

  it("regular mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await unoptomized.safeMint(acc1.address, 1);
    const t1 = await unoptomized.safeMint(acc1.address, 2);

    const tx = await t.wait();
    const tx1 = await t1.wait();
    console.log("\t t1 Gas Used", tx.gasUsed);
    console.log("\t t2 Gas Used", tx1.gasUsed);
  });
});

describe("Optimized", () => {
  beforeEach(async () => {
    const Optimized = await ethers.getContractFactory("Optimized");
    optimized = await Optimized.deploy();
  });
  it("Optimized mint", async () => {
    const [acc1, acc2] = await ethers.getSigners();

    const t = await optimized.safeMint(acc2.address, 3);
    const t1 = await optimized.safeMint(acc2.address, 4);
    const tx = await t.wait();
    const tx1 = await t1.wait();
    console.log("\t t1 Gas Used", tx.gasUsed);
    console.log("\t t2 Gas Used", tx1.gasUsed);
  });
});
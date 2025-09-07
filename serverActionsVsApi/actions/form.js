"use server";
import fs from "fs/promises";

const submitAction = async (e) => {
  console.log("check the data in the console");
  console.log(e.get("name"), e.get("role"));
  let a = await fs.writeFile(
    "harry.txt",
    `Name: ${e.get("name")}, Role: ${e.get("role")}`
  );
  console.log("file written successfully");
  console.log(a);
};

export default submitAction;

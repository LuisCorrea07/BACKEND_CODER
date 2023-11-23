import { Router } from "express";
import userModel from "../models/student.models";

const reouter = Router();

router.get("/", async (res, req) => {
  const users = await userModel.find();
  res.status(200).send({ status: "Todo OK", data: users });
});

router.post("/", async (res, req) => {
  const newUser = {
    firstName: "John",
    lastName: "Wick",
    useerName: "jwick",
    age: 40,
    active: true,
  };
  const result = await userModel.insertOne(newUser);
  res.status(200).send({ status: "Todo OK", data: result });
});

router.put("/:iud", async (res, req) => {
  const result = await userModel.updateOne({ _id: uid }, req.body);
  res.status(200).send({ status: "Todo OK", data: result });
});

router.delete("/", async (res, req) => {
  const result = await userModel.deleteOne({ _id: uid });
  res.status(200).send({ status: "Todo OK", data: result });
});

export default router;

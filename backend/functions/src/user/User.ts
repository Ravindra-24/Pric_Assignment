import { Response, Request, region } from "firebase-functions";
import { firestore } from "firebase-admin";
import { REGION } from "../constant/common_constant";
import * as cors from "cors";

const corsHandler = cors({ origin: true });

export const createUser = region(REGION).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        console.log(req.body);
        const { name, email, password } = req.body;
        const userRef = firestore().collection('users').doc()
        userRef.create({
          name,
          email,
          password,
          id: userRef.id
        })
        console.log(userRef.id);
        

        const userId = userRef.id;

        const userDataSnapshot = await firestore()
          .collection("users")
          .doc(userId)
          .get();
        const userData = userDataSnapshot.data();

        res.status(200).send({
          message: "success",
          data: userData,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "failed",
        });
      }
    });
  }
);

export const getUser = region(REGION).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const usersSnapshot = await firestore().collection("users").get();
        const userData = usersSnapshot.docs.map((doc) => doc.data());

        res.status(200).send({
          message: "success",
          data: userData,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "failed",
        });
      }
    });
  }
);

export const updateUser = region(REGION).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {

        const { name, email, password, id } = req.body;

        await firestore().collection("users").doc(id).update({ name, email, password, id });

        res.status(200).send({
          message: "User updated successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "Failed to update user",
        });
      }
    });
  }
);

export const deleteUser = region(REGION).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const userId = req.query.userId as string ;
        console.log(userId);
        
        if (!userId) {
          throw new Error("User ID is required.");
        }
        await firestore().collection("users").doc(userId).delete();

        res.status(200).send({
          message: "User deleted successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "Failed to delete user",
        });
      }
    });
  }
);
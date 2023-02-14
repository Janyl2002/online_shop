import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase";

export class FirebaseDB {
  static instance: any;
  app: any;
  db: any;

  constructor() {
    if (FirebaseDB.instance) return FirebaseDB.instance;

    FirebaseDB.instance = this;

    //@ts-ignore
    this.app = initializeApp(firebaseConfig);
    //@ts-ignore
    this.db = getFirestore();
  }
  async getProducts() {
    try {
      const colData = await getDocs(collection(this.db, "products"));
      const data = colData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      console.log(data);
    } catch (_err) {
      console.info(_err);
    }
  }
}

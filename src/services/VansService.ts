import { Van } from "../models/Van";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";
/* Camada de serviço que acessara a API(Back-end) */

const vansCollection = collection(db, "vans");

export const getVans = async (): Promise<Van[]> => {
  try {
    const data = await getDocs(vansCollection);
    const vans = data.docs.map((doc) => ({ ...doc.data() }));
    return vans;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getVansByType = async (type: string): Promise<Van[]> => {
  try {
    const q = query(collection(db, "vans"), where("type", "==", type));
    const data = await getDocs(q);
    const vans = data.docs.map((doc) => ({ ...doc.data() }));
    return vans;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getVan = async (id: number): Promise<Van | undefined> => {
  try {
    const docRef = doc(db, "vans", id.toString());
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.error("Could not find van");
    return undefined;
  }
};

export const getVansByIdHost = async (idHost: number): Promise<any> => {
  try {
    const q = query(collection(db, "vans"), where("hostId", "==", idHost));
    const data = await getDocs(q);
    const vans = data.docs.map((doc) => ({ ...doc.data() }));
    return vans;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/* export const init = async (): Promise<void> => {
  try {
    const vans = await getVans();
    for (const van of vans) {
      const data = await setDoc(doc(db, "vans", van.id?.toString() ?? ""), van);
    }
  } catch (error) {
    console.error(error);
  }
}; */

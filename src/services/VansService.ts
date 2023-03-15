import { Van } from "../models/Van";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
/* Camada de serviço que acessara a API(Back-end) */

const vansCollection = collection(db, "vans");

const getVansList = async () => {
  try {
    const data = await getDocs(vansCollection);
    const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
    console.log(filteredData);
  } catch (error) {
    console.error(error);
  }
};

getVansList();

const URL_BASE = "http://192.168.0.3:4000/vans";

export const getVans = async (): Promise<Van[]> => {
  const response = await fetch(URL_BASE);
  return response.json();
};

export const getVansByType = async (type: string): Promise<Van[]> => {
  const response = await fetch(`${URL_BASE}?type=${type}`);
  return response.json();
};

export const getVan = async (id: number): Promise<Van> => {
  const response = await fetch(`${URL_BASE}/${id}`);
  return response.json();
};

import { collection, query, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./init";

export const readHotelsData = async () => {
   const db = getFirestore(app);

   const hotels = []
   const hotelsCollection = collection(db, "hotels");

   const q = query(hotelsCollection);
   
   const results = await getDocs(q);
   results.forEach(doc => {
      hotels.push({ id: doc.id, ...doc.data() }); 
   })

   return hotels;
}

export const getHotelById = async (id) => {
   try {
      const db = getFirestore(app);
      const docRef = doc(db, "hotels", id);
      const docSnap = await getDoc(docRef);
 
      if (docSnap.exists()) {
         return { id: docSnap.id, ...docSnap.data() };
      } else {
         console.log("No such document!");
      }
      } catch (error) {
         console.error("Error getting document:", error);
      }
 };
import React, { useState, useEffect, useCallback } from "react";
import { useDatabase } from "..";
import { defaultList, List, Top } from "../../types";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore"; 

const key = "list";

const useTopList = () => {
  const [list, setList] = useState<List>([]);
  const { setItem, getItem } = useDatabase();

  const init = useCallback(
    () =>
      getItem<List>(key).then((l) => {
        if (l && l.length > 0) {
          setList(l);
        } else {
          setList(defaultList);
        }
      }),
    [getItem]
  );

  const getLists = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        getItem<List>(key)
          .then((l) => {
            if (l && l.length > 0) {
              setList(l);
              resolve();
            } else {
              reject();
            }
          })
          .catch(reject);
      }),
    [getItem]
  );

  const pushTop = (top: Top) => setList(Array.from(list.concat(top)));
  const createList = (l: List) => setList(Array.from(list.concat(l)));
  const findTopByTitle = useCallback(
    (title: string) => list.find((l) => l.title === title),
    [list]
  );

  useEffect(() => {
    const db = getFirestore();
    getDoc(doc(db, "list", "top")).then((document) => {
      const data = document.data();
      if(data){
        setList(data.list)
      }
    })
  }, []);

  useEffect(() => {
    if(list.length > 0){
      const db = getFirestore();
      setDoc(doc(db, "list", "top"), {list});
    };
  }, [list]);

  return {
    list,
    pushTop,
    createList,
    findTopByTitle,
    init,
    getLists,
  };
};

export default useTopList;

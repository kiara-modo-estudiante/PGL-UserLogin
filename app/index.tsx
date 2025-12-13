import React, { useEffect } from "react";
import { router } from "expo-router";
import { getToken } from "../services/storage";

const Index = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();

      if (!token || token == null) {
        router.replace("/(user)/login");
      } else {
        router.replace("/(drawer)/welcome");
      }
    };

    checkAuth();
  }, []);

  return null;
};

export default Index;

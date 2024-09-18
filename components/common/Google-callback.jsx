import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const GoogleCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const { code } = router.query; 

      if (code) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback?code=${code}`);
          
          const { token, userName } = response.data;
          localStorage.setItem("authToken", token);
          localStorage.setItem("userName", userName);  // Store userName for display in the header

          // Redirect to home page or dashboard
          router.push("/");
        } catch (error) {
          console.error("Error handling Google callback:", error);
        }
      }
    };

    handleGoogleCallback();
  }, [router.query]);

  return <div>Loading...</div>;
};

export default GoogleCallback;

import React from "react";

export function useFetchProfession() {
  const [profession, setProfession] = React.useState("");
  const [loading, setLoading] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProfession("Software engineer");
      setLoading(false);
    }, 3000);
  }, []);

  return { profession, loading };
}

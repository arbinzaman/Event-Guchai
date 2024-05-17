import { useEffect, useState } from "react";

const useUserRoles = (email) => {
  const [roles, setRoles] = useState([]);
  const [vendorRoles, setVendorRole] = useState([]);
  // console.log(roles);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3001/users/email/${email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch user roles");
          }
          return res.json();
        })
        .then((data) => {
          const processedRoles = data.map((roleObj) => ({
            role: roleObj.role,
            vendorRole: roleObj.vendorRole
          }));
          // console.log(processedRoles);
          setRoles(processedRoles[0].role);
          setVendorRole(processedRoles[0].vendorRole);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [email]);

  return { roles,vendorRoles, isLoading, error };
};

export default useUserRoles;

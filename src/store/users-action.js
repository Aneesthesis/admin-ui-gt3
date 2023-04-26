import { usersActions } from "./users-slice";

export const fetchUsers = () => {
  return async (dispatch) => {
    const fetchedData = async () => {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );

      if (!response.ok) {
        throw new Error("Error loading user list");
      }

      const data = response.json();

      return data;
    };
    try {
      const usersData = await fetchedData();
      dispatch(usersActions.setUsers(usersData || []));
    } catch (error) {
      console.log(error.message);
    }
  };
};

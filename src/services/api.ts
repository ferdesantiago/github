import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchRepositories = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/repositories?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching repositories", error);
    throw error;
  }
};

export const getCommitActivity = async (owner: string, repoName: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/activity?time_period=year`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching commits:", error);
  }
};

export const getUser = async (ownerId: number) => {
  try {
    const response = await fetch(
      `https://api.github.com/user/${ownerId}`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching commits:", error);
  }
};
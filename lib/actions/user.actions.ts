"use server"

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { ID } from "node-appwrite";

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();

    return parseStringify(result);
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const signIn = async() => {
  try {
    
  } catch (error) {
    console.error("Error")
  }
}

export const signUp = async(userData: SignUpParams) => {
  try {
    const { email, firstName, lastName, password } = userData;
    const { account } = await createAdminClient();
    const newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error")
  }
}
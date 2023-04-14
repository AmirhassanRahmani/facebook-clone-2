import Head from "next/head";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";
import { db } from "../firebase";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}

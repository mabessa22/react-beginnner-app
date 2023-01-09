import {getDocs, collection} from "firebase/firestore";
import{useEffect, useState} from "react";
import {db} from "../../../config/firebase";
import { Post } from "./post";


//you are declaring the various elements in the program
export interface  Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}


export const Main = () => {
    //the state is used to get the data that we get back
    const[ postsList, setPostsList ] = useState<Post[] | null >(null);

    //we are taking the data from the data base
    const postsRef = collection(db, "posts");

    //this will be used to call and get the posts
        const getPosts = async () => {
            const data = await getDocs(postsRef);
            //below you are specifying what data you need to get from firebase, so you map the docs then specify you want the id from doc.id
            setPostsList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
              );
            };
          
            useEffect(() => {
              getPosts();
            }, []);
            
    return (
    <div> 
        {postsList?.map((post) => (
            <Post post={post} />
        ))}
    </div>
    );

};
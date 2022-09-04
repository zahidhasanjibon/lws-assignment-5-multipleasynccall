const { dispatch } = require("./app/store");
const store = require("./app/store");

const { fetchPosts } = require("./features/post/postSlice");
const  {fetchRelatedPosts} = require("./features/relatedPost/relatedPostSlice")


// initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(`${JSON.stringify(store.getState())}`);
    console.log(store.getState().singlePost)
    console.log(store.getState().relatedPosts) 

    //   console.log(store.getState().singlePost.posts.length);

});
// disptach actions

       const dispatchToFetchPosts = async() => {
       await store.dispatch(fetchPosts())
       const title = store.getState().singlePost?.posts?.title
       let splitTitle = title.split(" ")
      let queryString =  splitTitle.join("&title_like=")
       await store.dispatch(fetchRelatedPosts(queryString))
       }
       dispatchToFetchPosts()
  


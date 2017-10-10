class Posts {
    getPosts() {
        return {posts: [
            {
                title: 'Näringslivskontakt', 
                utskott: 'Näringsliv',
                link: 'https://www.google.com', 
                responsabillities: [
                    'Be cool',
                    'Be awesome'
                ],
                salesPitch: "A Brief salespitch for the post",
                description: "A description about the post"
            }, 
            {    
                title: 'Arbetare', 
                utskott: 'Sexet',
                link: 'https://www.facebook.com',
                responsabillities: [],
                salesPitch: "A Brief salespitch for the post",
                description: "A description about the post"
            }
        ]}
    }
}

export default Posts;
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

    const [loading, setLoading] = useState(true); // interneti yavaş olan kullanıcıya loading göstereceğiz.
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);


    //axios , async/await
    useEffect(() => {
        //const ile asynci  içeriye aldık
        // anonim fonksiyonumu yazıyorum
        (async () => {
            try {
                const { data: users } = await axios
                    ("https://jsonplaceholder.typicode.com/users");
                const { data: posts } = await axios
                    (`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

                // users ve postları ekranda göstermek için ve loadingi veriler yüklenince ekrandan kaldırmak için
                setLoading(false);
                setUsers(users);
                setPosts(posts);
            } catch (error) {
                console.log('error try catch ile yakaladık', error)
            }
        })();
    }, []);



    return (
        <div>
            <div>
                <h2>Users</h2>

                {loading && <div>Yükleniyor...</div>}

                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))

                    }
                </ul>
            </div>
            <div>
                <h2>Posts:</h2>
                <ul>
                    {
                        posts.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default Users
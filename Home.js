// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(users => {
//         let usersBox = document.getElementsByClassName('users-box')[0];
//         for (const user of users){
//             let pUser = document.createElement('p');
//             pUser.innerText = ` ${user.userId} -  ${user.id} - ${user.title} - ${user.body}`;
//             usersBox.append(pUser);
//         }
//     })



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

//
// fetch('https://jsonplaceholder.typicode.com/comments')
//    .then(response => response.json())
//    .then(users =>{
//        let userBox = document.getElementsByClassName('users-box')[0];
//        for (const user of users){
//            let pUser = document.createElement('p');
//            pUser.innerText = ` ${user.postId} - ${user.id} - ${user.name} - ${user.email} - ${user.body} `;
//            userBox.append(pUser);
//        }
//
//    })



// ======================================================

// classwork


// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let postsBox = document.getElementsByClassName('posts-box')[0];
//         for (const post of posts){
//             let pPost = document.createElement('p');
//             pPost.innerText = `${post.userId} - ${post.id} - ${post.title}`;
//             let detailsBtn = document.createElement('button');
//             detailsBtn.innerText = 'details';
//             detailsBtn.onclick = function (){
//                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                    .then(value => value.json())
//                    .then(comments =>{
//                        let commentsBox = document.getElementsByClassName('comments-box')[0];
//                        commentsBox.innerHTML = '';
//                        for (const comment of comments) {
//                            let liComment = document.createElement('li');
//                            liComment.innerText = comment.body;
//                            commentsBox.appendChild(liComment);
//
//                        }
//                    });
//             }
//                         pPost.appendChild(detailsBtn);
//                         postsBox.appendChild(pPost);
//         }
//     });


// ===============================================================================

// additional

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
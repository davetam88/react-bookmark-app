//   e.preventDefault();
  
// // what is next line doing here and what does it use for ???

//   const bookmark = (({ title, url, description, rating }) => ({ title, url, description, rating }))(this.state);


//   const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(bookmark),
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
//     }
//   };

//   fetch(url, options)
//     .then(res => {
//       if (!res.ok)
//       {
//         throw new Error('Something went wrong, please try again later');
//       }
//       return res.json();
//     })
//     .then(data => {
//       this.setState({
//         title: "",
//         url: "",
//         description: "",
//         rating: 1
//       });
//       this.props.handleAdd(bookmark);
//     })
//     .catch(err => {
//       this.setState({
//         error: err.message
//       });
//     });
// }
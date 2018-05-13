$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        var username = e.target.value;
            $.ajax({url: "https://api.github.com/users/"+ username,
            data:{
                client_id:'7ee84acbdecac2c3d8c3',
                client_secret:'08ea80f5a402564a7de1cce9a34d50b1b9df8c6d'},
             success: function(user){
               $('#profile').html(`
               <div class="panel panel-default ">
                    <div class="panel-heading">
                      
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3 left-panel">
                                
                            </div>
                            <div class="col-md-8 right-panel">

                            </div>
                            <div class="col-md-1">
                            </div>
                        </div>
                    </div>
               </div><br/><br/>
               <h3 class="page-header">Latest Repos :</h3><br/><br/>
               <div id="repos"></div>
               `);
                $(".panel-heading").append(` <h3 class="panel-title"> ${user.name} </h3>`);
                $(".left-panel").append(`<img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block profile_btn" href="${user.html_url}">View Profile</a>`);
                $(".right-panel").append(` <span class="badge panel-badge">Public Repos: ${user.public_repos}</span>
                <span class="badge panel-badge">Public Gists: ${user.public_gists}</span>
                <span class="badge panel-badge">Followers: ${user.followers}</span>
                <span class="badge panel-badge">Following: ${user.following}</span>
                <br/><br/> 
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
               `);
               
              
               $.ajax({
                url:'https://api.github.com/users/'+username+'/repos',
                data:{
                    client_id:'7ee84acbdecac2c3d8c3',
                    client_secret:'08ea80f5a402564a7de1cce9a34d50b1b9df8c6d',
                    per_page : 10,
                    
                     },
                success: function(repos){
                    
                        $.each(repos, function(index, repo){
                            
                        $('#repos').append(`
                          <div class="card">
                            <div class="row">
                              <div class="col-md-7">
                                <strong>${repo.name}</strong>: ${repo.description}
                              </div>
                              <div class="col-md-3">
                                <span class="badge repo-badge">Forks: ${repo.forks_count}</span>
                                <span class="badge repo-badge">Watchers: ${repo.watchers_count}</span>
                                <span class="badge repo-badge">Stars: ${repo.stargazers_count}</span>
                              </div>
                              <div class="col-md-2">
                                <button onclick="repoDetail()" class="btn btn-default">Repo Detail</button>
                              </div>
                            </div>
                          </div>
                          <br/>
                          
                        `);
                            
                   
                     });
                    
                     $('#repos').append(`
                     <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                             <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                             <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                     </nav>
                    `)
                    }
                 });
                
                 }});
            
        });
    });
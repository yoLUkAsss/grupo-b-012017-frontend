<!doctype html>
<html ng-app="alolocoApp">

  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.min.js"></script>

    <link rel="stylesheet" type="text/css" href="app/styles.css">
  </head>

   <body>
      <div class="container-fluid">
        <div>
          <!-- example 2 - using auto margins -->
          <nav class="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
              <div class="navbar-collapse collapse dual-collapse">
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
              <a class="navbar-brand d-flex mx-auto" href="#">A lo loco!!! </a>
              <div class="navbar-collapse collapse dual-collapse">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item btn-sm btn-outline-success">
                          <a class="nav-link " href="#">Sign Up</a>
                      </li>
                  </ul>
              </div>
          </nav>

        </div>


        <div>
          <nav class="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
              <div class="navbar-collapse collapse dual-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item btn-sm btn-outline-success active">
                        <a class="nav-link " href="#">Products</a>
                    </li>
                    <li class="nav-item btn-sm btn-outline-success">
                        <a class="nav-link " href="#">Offers</a>
                    </li>
                    <li class="nav-item btn-sm btn-outline-success " style="margin:auto">
                        <a class="nav-link " href="#">My Profile</a>
                    </li>
                    <li class="nav-item btn-sm btn-outline-success" style="margin:auto">
                        <a class="nav-link " href="#">Create Offer</a>
                    </li>
                </ul>
              </div>
              <div class="navbar-collapse collapse dual-collapse">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item btn-sm btn-outline-success">
                          <a class="nav-link " href="#">Log Out</a>
                      </li>
                  </ul>
              </div>
          </nav>
        </div>

        <div>
          <div class="row">
            <div class="col col-md-4">
              <ul class="list-group">
               <!-- <ng-repeat li class="list-group-item"> {{element.name}} </li>  -->
                <li class="list-group-item list-group-item-info">
                  <a class="nav-link" href="#">ProductList 1</a>
                </li>
                <li class="list-group-item">
                  <a class="nav-link" href="#">ProductList 2</a>
                </li>
                <li class="list-group-item">
                  <a class="nav-link" href="#">ProductList 3</a>
                </li>
                <li class="list-group-item">
                  <a class="nav-link" href="#">ProductList 4</a>
                </li>
                <li class="list-group-item">
                  <a class="nav-link " href="#">Create New</a>
                </li>
              </ul>
            </div>

            <div class="col col-md-8">
              <ul class="list-group">
               <!-- <ng-repeat li class="list-group-item"> {{element.name}} </li>  -->
               <li class="list-group-item list-group-item-info">
                 <a class="nav-link" href="#">Product 1</a>
               </li>
               <li class="list-group-item">
                 <a class="nav-link" href="#">Product 2</a>
               </li>
               <li class="list-group-item">
                 <a class="nav-link" href="#">Product 3</a>
               </li>
               <li class="list-group-item">
                 <a class="nav-link" href="#">Product 4</a>
               </li>
              </ul>
            </div>
          </div>
        </div>

        <footer class="fixed-bottom">
          <div class="footer">
            <h5> Laime Jesus & Sandoval Lucas Enterprise - 2017  </h5>
          </div>
        </footer>

      </div>

   </body>
</html>

let max = () =>{
    return `  <div id="navbar1">
    <div>
        <a href='' style="text-decoration:none;color:black;">
            <img src="https://static.thcdn.com/www/common/images/flags/1x1/us-853f40a4f4.svg" style="width:20px ;height: 20px; border-radius: 50px;" alt="">
            us-USA</a>
    </div>
</div>
<div id="navbar2">
    <div>
        <div>
            <a href="./index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="259" height="64" viewBox="0 0 259 64">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#222" fill-rule="nonzero">

                            <path
                                d="M54.998 9.03C48.853 3.01 40.261 0 29.286 0H0v63.15h29.098c10.724 0 19.253-3.01 25.587-9.092 6.206-5.796 9.65-13.961 9.47-22.451.273-8.481-3.053-16.682-9.157-22.576zm-24.27 41.955c-7.057-.011-13.572-3.787-17.091-9.905-3.52-6.117-3.507-13.647.031-19.754 3.539-6.106 10.066-9.86 17.124-9.85 10.91.018 19.74 8.876 19.722 19.786-.017 10.91-8.875 19.74-19.785 19.723zm59.264-29.036h7.337c6.083 0 9.783 3.763 9.783 9.595 0 5.832-3.7 9.595-9.783 9.595h-7.337v-19.19zm7.086 14.863c3.198 0 5.017-2.007 5.017-5.268 0-3.26-1.819-5.268-5.017-5.268h-2.07v10.536h2.07zm26.903-14.863v4.327h-8.905v3.01h8.153v4.202h-8.153v3.324h8.905v4.327H110.06v-19.19h13.922zm8.341 12.856v6.334h-5.017v-19.19h8.717c4.202 0 7.086 2.32 7.086 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.644l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm22.702 10.347l-4.077-11.414V41.14h-4.766v-19.19h6.209l4.264 11.978 4.265-11.978h6.145v19.253h-4.766V29.725l-4.013 11.414h-3.261zm20.005-5.644c.439 1.317 1.568 1.944 3.135 1.944 1.568 0 2.634-.627 2.634-1.819 0-.878-.627-1.317-1.818-1.567l-3.763-.753c-2.822-.627-5.017-2.07-5.017-5.33 0-3.763 3.136-6.209 7.463-6.209 4.766 0 7.462 2.571 7.964 5.895h-4.954c-.44-1.066-1.317-1.881-2.948-1.881-1.442 0-2.445.627-2.445 1.693 0 .815.627 1.317 1.63 1.505l3.826.878c3.323.752 5.142 2.571 5.142 5.518 0 3.951-3.324 6.209-7.588 6.209-4.64 0-7.84-2.195-8.529-6.02h5.268v-.063zm11.852-13.546h17.058v4.327h-6.02v14.926h-5.08V26.276h-5.958V21.95zm27.092 19.504c-5.581 0-9.47-4.202-9.47-9.909 0-5.77 3.889-9.908 9.47-9.908 5.644 0 9.532 4.139 9.532 9.908 0 5.77-3.888 9.909-9.532 9.909zm0-15.428c-2.634 0-4.327 2.195-4.327 5.52 0 3.323 1.693 5.518 4.327 5.518s4.39-2.195 4.39-5.519c0-3.324-1.756-5.519-4.39-5.519zm16.681 8.78v6.334h-5.017v-19.19h8.717c4.202 0 7.087 2.32 7.087 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.645l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm27.782-8.843v4.327h-8.905v3.01h8.152v4.202h-8.152v3.324h8.905v4.327h-13.86v-19.19h13.86z"
                                transform="translate(-890 -121) translate(890 121)"></path>
                </svg></a>
        </div>
        <div>
            <form>
                <input type="text" placeholder="Search for a product or a brand" name="search">
                <button type="submit"><i class="fa fa-search"></i></button>

            </form>
        </div>
        <div>
            <a href="#" style="color:black; text-decoration: none"><i class="fa fa-fw fa-user"></i> <div class="dropdown">
                <button class="dropbtn">Account</button>
                <div class="dropdown-content" style="width:300px ; height:auto ; line-height: 30px;justify-content: center;">
                    <a href="#" id="showusername" ></a>
                    <a href="login.html" style="width: 83%; height:20px ;text-align: center; align-items: center;background-color: black;" onclick="logoutfun()" id="loginlogout"><b style="color: aliceblue;">Login</b></a>
                    <a href="register.html"  style="width: 83%; height:20px ;text-align: center; align-items: center; background-color: rgb(236, 234, 234);border:solid black;margin-top: 5px;" id="register"><b style="color: black; ">Rigester</a>
                    <a href="#">My Favorite</a>
                    <a href="#">Your Order</a>
                    <a href="#">Auto-Replenishments</a> 
                    <a href="#">Your Refer</a>
                </div>
            </div></a>
        </div>
        <div>
            <a href="cart.html" style='font-size:25px; color:black; text-decoration: none;'><i class='fas fa-shopping-cart'
                    style='font-size:26px'></i>Cart</a>
        </div>
    </div>
    <div id="bar">
        <a href="#">
            <div class="dropdown">
                <button class="dropbtn">Brand</button>
                <div class="dropdown-content3">
                  <div> <hr>
                    <a href="#"></a>
                </div>
                <div>  
                    <hr > 
                    <a href="#"><h3 style="color: black;">A</h3> </a> 
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">B</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">C</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">D</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">E</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">F</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">G</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">H</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">I</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">J</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">K</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">L</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">M</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">N</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">O</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">P</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">Q</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">R</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">S</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">T</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">U</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">V</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">W</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">X</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">Y</h3> </a>
                    <hr>
                </div>
                <div>  
                    <hr> 
                    <a href="#"><h3 style="color: black;">Z</h3> </a>
                    <hr>
                </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">SummerShop</button>
                <div class="dropdown-content">
                    <hr>
                    <a href="#" ><b style="color:black ;">View all</b></a>
                    <a href="#">SPF</a>
                    <a href="#">Travel Size</a>
                    <a href="#">Skin Care</a>
                    <a href="#"> Makeup</a> 
                    <a href="#">Hair Care</a>
                </div>
            </div>
                <div class="dropdown">
                    <button class="dropbtn">BrowseBy</button>
                    <div class="dropdown-content1">
                      <div> 
                        <hr style="margin-left:10px ;"> 
                        <a href="#"><h3 style="color: black;">Brand</h3> </a>
                        <a href="#">SkinCeuticals</a>
                        <a href="#"> EltaMD</a>
                        <a href="#">SkinMedica</a>
                        <a href="#"> Obagi</a>
                        <a href="#">iSClinical</a>
                        <a href="#">EminenceOrganicSkinCare</a>
                        <a href="#">RevisionSkincare</a>
                        <a href="#">Neocutis</a>
                        <a href="#">Oribe</a>
                        <a href="#">Sunday Riley</a>
                    </div>
                    <div>  
                        <hr style="margin-left:10px ;"> 
                        <a href="#"><h3 style="color: black;">Brand</h3> </a>
                        <a href="#">SkinCeuticals</a>
                        <a href="#"> EltaMD</a>
                        <a href="#">SkinMedica</a>
                        <a href="#"> Obagi</a>
                        <a href="#">iSClinical</a>
                        <a href="#">EminenceOrganicSkinCare</a>
                        <a href="#">RevisionSkincare</a>
                        <a href="#">Neocutis</a>
                        <a href="#">Oribe</a>
                        <a href="#">Sunday Riley</a>
                    </div>
                    <div>  
                        <hr style="margin-left:10px ;"> 
                        <a href="#"><h3 style="color: black;">Brand</h3> </a>
                        <a href="#">SkinCeuticals</a>
                        <a href="#"> EltaMD</a>
                        <a href="#">SkinMedica</a>
                        <a href="#"> Obagi</a>
                        <a href="#">iSClinical</a>
                        <a href="#">EminenceOrganicSkinCare</a>
                        <a href="#">RevisionSkincare</a>
                        <a href="#">Neocutis</a>
                        <a href="#">Oribe</a>
                        <a href="#">Sunday Riley</a>
                    </div>
                    <div> 
                        <hr style="margin-left:10px ;"> 
                        <a href="#"><h3 style="color: black;">Brand</h3> </a>
                        <a href="#">SkinCeuticals</a>
                        <a href="#"> EltaMD</a>
                        <a href="#">SkinMedica</a>
                        <a href="#"> Obagi</a>
                        <a href="#">iSClinical</a>
                        <a href="#">EminenceOrganicSkinCare</a>
                        <a href="#">RevisionSkincare</a>
                        <a href="#">Neocutis</a>
                        <a href="#">Oribe</a>
                        <a href="#">Sunday Riley</a>
                    </div>
                    <div> 
                        <hr style="margin-left:10px ;"> 
                        <a href="#"><h3 style="color: black;">Brand</h3> </a>
                        <a href="#">SkinCeuticals</a>
                        <a href="#"> EltaMD</a>
                        <a href="#">SkinMedica</a>
                        <a href="#"> Obagi</a>
                        <a href="#">iSClinical</a>
                        <a href="#">EminenceOrganicSkinCare</a>
                        <a href="#">RevisionSkincare</a>
                        <a href="#">Neocutis</a>
                        <a href="#">Oribe</a>
                        <a href="#">Sunday Riley</a>
                    </div>
                   
                    </div>
                </div>
                    <div class="dropdown">
                        <button class="dropbtn">Bestsellers</button>
                        <div class="dropdown-content">
                           
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">SkinCare</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        
                       
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Makeup</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        
                       
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">HairCare</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                    
                     
                        
                       
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Bath&Body</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">Brand</h3> </a>
                            <a href="#">SkinCeuticals</a>
                            <a href="#"> EltaMD</a>
                            <a href="#">SkinMedica</a>
                            <a href="#"> Obagi</a>
                            <a href="#">iSClinical</a>
                            <a href="#">EminenceOrganicSkinCare</a>
                            <a href="#">RevisionSkincare</a>
                            <a href="#">Neocutis</a>
                            <a href="#">Oribe</a>
                            <a href="#">Sunday Riley</a>
                        </div>
                      
                        
                       
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Tools&Devices</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">SkinCareTools</h3> </a>
                           
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">HairCareTools</h3> </a>
                            
                        </div>
                        <div>  
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">MakeupTools</h3> </a>
                           
                        </div>
                      
                        
                       
                        </div>
                    </div>
                                       
                    <div class="dropdown">
                        <button class="dropbtn">GIfts&Sets</button>
                        <div class="dropdown-content">
                            <hr>
                            <a href="#" ><b style="color:black ;">View all</b></a>
                            <a href="#">SPF</a>
                            <a href="#">Travel Size</a>
                            <a href="#">Skin Care</a>
                            <a href="#"> Makeup</a> 
                            <a href="#">Hair Care</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">BeautyFIX</button>
                        <div class="dropdown-content1">
                          <div> 
                            <hr style="margin-left:10px ;"> 
                            <a href="#"><h3 style="color: black;">SkinCareTools</h3> </a>
                           
                        </div> 
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn"></button>
                        <div class="dropdown-content">
                            <hr>
                            <a href="#" ><b style="color:black ;">View all</b></a>
                            <a href="#">SPF</a>
                            <a href="#">Travel Size</a>
                            <a href="#">Skin Care</a>
                            <a href="#"> Makeup</a> 
                            <a href="#">Hair Care</a>
                        </div>
                    </div>
                                                        <div class="dropdown">
                                                            <button class="dropbtn">NewArrivals</button>
                                                            <div class="dropdown-content">
                                                                <hr>
                                                                <a href="#" ><b style="color:black ;">View all</b></a>
                                                                <a href="#">SPF</a>
                                                                <a href="#">Travel Size</a>
                                                                <a href="#">Skin Care</a>
                                                                <a href="#"> Makeup</a> 
                                                                <a href="#">Hair Care</a>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <button class="dropbtn">Skin101</button>
                                                            <div class="dropdown-content2">
                                                              <div> 
                                                                <a href="#">
                                                                    <img src="https://static.thcdn.com/navigation/208/2021/05/original-blog-3-20210523-20210525.jpg" alt="placeholder" >
                                                                    <h3 style="color: black;font-size: 15px;line-height: 15px;">Answer To Your SkinCare Questions</h3>
                                                                </a>
                                                                
                                                            </div>
                                                            <div>  
                                                                <a href="#">
                                                                    <img src="https://static.thcdn.com/navigation/208/2021/05/original-blog-2-20210523-20210525.jpg" alt="placeholder" >
                                                                    <h3 style="color: black;font-size: 15px;line-height: 15px;">Become Skin Expert</h3>
                                                                </a>
                                                                
                                                            </div>
                                                            <div>  
                                                                
                                                                
                                                                <a href="#">
                                                                    <img src="https://static.thcdn.com/navigation/208/2021/05/original-blog-3-20210523-20210525.jpg" alt="placeholder" >
                                                                    <h3 style="color: black;font-size: 15px;line-height: 15px;">How tos&mor</h3>
                                                                </a>
                                                                
                                                            </div>
                                                          
                                                            
                                                           
                                                            </div>
                                                        </div>
                                                                
        </a>
    </div>
</div>`
}

const foot=()=>{
    return `<hr>
    <div id="footer">
        <div>
            <h3>Sign up to our newsletters and receive the latest exclusive discounts and deals</h3>
            <button>SIGN Me UP</button>
        </div>
        <div style="margin-right:400px ;">
            <p>Connect with us</p>
            <div id="socialmedialogo" style="display:flex; margin-right: 10px;">
                <a href="#" class="fa fa-facebook" ></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-pinterest"></a>
                <a href="#" class="fa fa-youtube"></a>
            </div>
        </div>
    </div>
    <div id="footerpart2">
        <div>
            <hr>
            <p style="padding-bottom:20px;">Customer Service</p>
            <a href="#">
                <p>Help Center / FAQs</p>
                <p>Returns</p>
                <p>Shipping Information</p>
                <p>Track my order</p>
                <p><i class='fas fa-cookie-bite' style='font-size:20px;margin-right: 10px;'></i>Cookie Settings</p>
            </a>
        </div>
        <div>
            <hr>
            <p style="padding-bottom:20px;">My Account</p>
            <a href="#">
                <p>Manage My Auto-Replenishments</p>
                <p>My Rewards</p>
                <p> My Favorites</p>
                <p> Refer a Friend</p>
                <p> Order History</p>
            </a>
        </div>
        <div>
            <hr>
            <p  style="padding-bottom:20px;">Company</p>
            <a href="#">
                <p>About Us</p>
                <p>Press</p>
                <p>What is Klarna?</p>
              
            </a>
        </div>
        <div>
            <hr>
            <p  style="padding-bottom:20px;">Legal</p>
            <a href="#">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Modern Slavery Statement</p>
                <p>Product Recall</p>
                <p>Accessibility</p>
            </a>
        </div>
    </div>
    <hr>
    <div id="payments">
        <div>
            <h1>THG</h1>
            <p>2022 © The Hut.com Ltd.</p>
        </div>
        <div>
            <h4>Pay securely with</h4>
            <div id="payments-content">
                <div>
                    <div><i class="fa fa-paypal" style="font-size:36px"></i></div>
                </div>
                <div> <i class="fa fa-cc-diners-club" style="font-size:36px"></i></div>
                <div><i class="fa fa-cc-mastercard" style="font-size:48px;color:red"></i></div>
                <div>  <i class="fa fa-cc-paypal" style="font-size:36px"></i></div>
                <div> <i class="fa fa-cc-visa" style="font-size:36px"></i></div>
                <div><i class="fa fa-cc-visa" style="font-size:48px;color:red"></i></div>
                <div><i class="fa fa-paypal" style="font-size:36px"></i></div>
                <div><i class="fa fa-credit-card" style="font-size:36px"></i></div>
                <div><i class="fa fa-cc-visa" style="font-size:48px;color:red"></i></div>
                
               
    
            </div>
        </div>
    </div>`
}
 
export {max,foot};
<template>
    <div class="main">
        <div class="main-inner">
            <div class="main-inner_left">
                <img class="main-inner_left__image1" src="../assets/img/skilet.png" alt="">
                <img class="main-inner_left__image2" src="../assets/img/circle1.png" alt="">
                <img class="main-inner_left__image3" src="../assets/img/dialog.png" alt="">
                <img class="main-inner_left__image4" src="../assets/img/dots.png" alt="">
                <img class="main-inner_left__image5" src="../assets/img/planet.png" alt="">
                <img class="main-inner_left__image6" src="../assets/img/shadow.png" alt="">
                <img class="main-inner_left__image7" src="../assets/img/dialog2.png" alt="">
                <img class="main-inner_left__image8" src="../assets/img/dots.png" alt="">
                <img class="main-inner_left__image9" src="../assets/img/circle2.png" alt="">
                <img class="main-inner_left__image10" src="../assets/img/circle3.png" alt="">
                <img class="main-inner_left__image11" src="../assets/img/dots.png" alt="">
                <img class="main-inner_left__image12" src="../assets/img/dots.png" alt="">
                <img class="main-inner_left__image13" src="../assets/img/shadowbutton.png" alt="">
                <div class="main-inner_left__content">
                    <h1>Turn your ideas into reality.</h1>
                    <p>Start for free and get attractive offers from the community</p>
                </div>
            </div>
            <div class="main-inner_right">
                <div class="main-inner_right__cont">
                    <img src="../assets/img/quarty.png" alt="">
                    <h1>Login to your Account</h1>
                    <p>See what is going on with your business</p>
                    <button @click="handleSignIn()"> <img src="../assets/img/google.png" > Continue with Google</button>
                    <p class="main-inner_right__cont_Sign">------------- or Sign in with Email ------------- </p>
                    <form name="email">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="mail@abc.com">
                    </form>
                    <form name="passw">
                        <label for="passw">Password</label>
                        <input type="password" name="password" placeholder="*****************">
                    </form>
                    <div class="main-inner_right__cont_check">
                        <form name="checkbox">
                            <input type="checkbox" name="check">
                            <label for="check">Remember Me</label>
                        </form>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div class="main-inner_right__cont_buttons">
                        <button>Login</button>
                        <a href="#"></a>
                    </div>
                </div>
                <div class="main-inner_right__register">
                    <p>Not Registered Yet? <a href="#">Create an account</a></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            isLogin: false,
        }
    },
    methods: {
        async handleSignIn() {
            const googleUser = await this.$gAuth.signIn();
            console.log("googlUser", googleUser);
            this.$gAuth.isAuthorized;
            this.$router.push('/welcome')
        } 
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 1920px;
    height: 1080px;
    border-radius: 30px;
    border: 5px #fff solid;
    margin: auto;
    
    &-inner {
        display: flex;
        width: 100%;
        height: 100%;
        &_left {
            background-color: #FFE6C9;
            width: 60%;
            height: 100%;
            border-radius: 30px;
            position: relative;
            &__image1 {
                position: absolute;
                top: 30%;
                left: 30%;
            }
            &__image2 {
                position: absolute;
                top: 15%;
                left: 60%;
                z-index: 1;
            }
            &__image3 {
                position: absolute;
                top: 34%;
                left: 25%;
            }
            &__image4 {
                position: absolute;
                top: 5%;
                left: 30%;
            }
            &__image5 {
                position: absolute;
                top: 0;
                left: 0;
                border-top-left-radius: 30px;
            }
            &__image6 {
                position: absolute;
                top: 15%;
                left: 25%;
            }
            &__image6 {
                position: absolute;
                top: 15%;
                left: 25%;
            }
            &__image7 {
                position: absolute;
                top: 38%;
                left: 65%;
            }
            &__image8 {
                position: absolute;
                top: 48%;
                left: 10%;
            }
            &__image9 {
                position: absolute;
                top: 54%;
                left: 73%;
            }
            &__image10 {
                position: absolute;
                top: 79%;
                left: 12%;
            }
            &__image11 {
                position: absolute;
                top: 9%;
                left: 7%;
                transform: rotate(180deg);
            }
            &__image12 {
                position: absolute;
                top: 39%;
                left: 47%;
            }
            &__image13 {
                position: absolute;
                top: 92.3%;
                left: 97%;
                z-index: 1;
            }
            &__content {
                margin-top: 930px;
                text-align: center;
                h1 {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 800;
                font-size: 40px;
                line-height: 50px;
                color: #73114B;
                }
                p {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 1px;
                    color: #73114B;
                }
            }
            

        }
        &_right {
            background: #fff;
            width: 40%;
            height: 100%;
            position: relative;
            &__cont {
                position: absolute;
                top: 15%;
                right: 190px;
                img {
                    padding-bottom: 36px;
                }
                h1 {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 5px;
                    color: #525252;
                }
                p {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    color: #525252;
                }
                button {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    gap: 13px;
                    width: 420px;
                    height: 45px;
                    border: 1px solid #E8E8E8;
                    border-radius: 5px;
                    background: #fff;
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 19px;
                    color: #828282;
                    img {
                        padding-top: 34px;
                    }
                }
                &_Sign {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    color: #A1A1A1;
                    padding-top: 36px;
                    padding-bottom: 36px;
                }
                form[name="email"] {
                    width: 420px;
                    height: 68px;
                }
                label {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 27px;
                    color: #828282;
                }
                input[name="email"] {
                    width: 420px;
                    height: 45px;
                    border: 1px solid #DED2D9;
                    border-radius: 5px;
                    padding-left: 10px;
                }
                ::placeholder {
                   font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #E0E0E0; 
                    
                }
                form[name="passw"] {
                    width: 420px;
                    height: 68px;
                    margin-top: 24px;
                }
                input[name="password"] {
                    width: 420px;
                    height: 45px;
                    border: 1px solid #DED2D9;
                    border-radius: 5px;
                    padding-left: 10px;
                }
                ::placeholder {
                   font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #E0E0E0; 
                    
                }
                &_check {
                    display: flex;
                    width: 420px;
                    justify-content: space-between;
                    padding-top: 8px;

                    input[name="check"] {
                    box-sizing: border-box;
                    vertical-align: middle;
                    }
                    input[name="check"]:checked {
                        background: #7F265B;
                        border: 2px solid #7F265B;
                        border-radius: 2px;
                    }
                    input[name="check"] + label {
                        font-family: 'Nunito Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        padding-left: 8px;
                        color: #A1A1A1;
                    }
                    a {
                        font-family: 'Nunito Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 12px;
                        line-height: 16px;
                        text-decoration: none;
                        color: #7F265B;
                        padding-top: 3px;
                    }
                }
                &_buttons {
                    padding-top: 32px;
                    button {
                        width: 435px;
                        height: 50px;
                        background: #7F265B;
                        border-radius: 6px;
                        font-family: 'Nunito Sans';
                        font-style: normal;
                        font-weight: 800;
                        font-size: 18px;
                        line-height: 25px;
                        color: #FFFFFF;
                    }
                }
            }
            &__register {
                position: relative;
                top: 89%;
                left: 30%;
                p {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 25px;
                    color: #828282;
                }
                a {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 25px;
                    color: #7F265B;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
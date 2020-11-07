// import React, { Component } from 'react';
// import { withStyles } from "@material-ui/core/styles";
// import styles from './styles/AuthFormStyles';

// class AuthForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loginOpen: true,
//       animDuration: 1000,
//     }
//   }

//   toggleOpen() {
//     this.state.loginOpen = !this.state.loginOpen;
//     //Animation
//       if (window.matchMedia("(max-width: 799px)").matches) {
//         //MOBILE
//         if (!loginOpen) {
//           signupCollapsed.style.animation = `moveCollapsedUp ${animationDuration}ms ease-in-out 0s`;
//           signupHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
//           loginForm.style.animation = `moveFormDown ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
//         }
//         else {
//           loginCollapsed.style.animation = `moveCollapsedDown ${animationDuration}ms ease-in-out 0s`;
//           loginHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
//           signupForm.style.animation = `moveFormUp ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
//         }
//       }
//       else {
//         //DESKTOP
//         if (!loginOpen) {
//           signupCollapsed.style.animation = `moveLeft ${animationDuration}ms ease-in-out 0s`;
//           signupHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
//           loginForm.style.animation = `moveRight ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
//         }
//         else {
//           loginCollapsed.style.animation = `moveRight ${animationDuration}ms ease-in-out 0s`;
//           loginHide.style.animation = `fade ${animationDuration}ms ease-in-out 0s`;
//           signupForm.style.animation = `moveLeft ${animationDuration}ms ease-in-out 0s, fade ${animationDuration}ms ease-in-out 0s`;
//         }
//       }

//       setTimeout(makeChanges, animationDuration);
//   }

//   makeChanges() {
//     //CHANGE VISIBILITY OF ALL ELEMENTS
//     loginForm.classList.toggle("hidden");
//     loginCollapsed.classList.toggle("hidden");
//     signupForm.classList.toggle("hidden");
//     signupCollapsed.classList.toggle("hidden");
//     changeOrientation();

//     //Remove Aniamtions
//     signupCollapsed.style.animation = "none";
//     signupForm.style.animation = "none";
//     signupHide.style.animation = "none";
//     loginCollapsed.style.animation = "none";
//     loginHide.style.animation = "none";
//     loginForm.style.animation = "none";
//   }

//   changeOrientation() {
//     if (window.matchMedia("(max-width: 799px)").matches) {
//       if (loginOpen) {
//         document.querySelector(".login-wrapper").style.height = "70%";
//         document.querySelector(".signup-wrapper").style.height = "30%";
//       }
//       else {
//         document.querySelector(".login-wrapper").style.height = "30%";
//         document.querySelector(".signup-wrapper").style.height = "70%";
//       }
//     }
//     else {
//         document.querySelector(".login-wrapper").style.height = "100%";
//         document.querySelector(".signup-wrapper").style.height = "100%";
//     }
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <div className={classes.modalWrapper}>
//           <div className={classes.loginWrapper}>
//             <div className={classes.collapsedSection, classes.hidden}>
//               <div className={classes.hideSection}>
//                 <h2 className={classes.collapsedHeading}>Have an Account?</h2>
//                 <p className={classes.collapsedText}>To keep connected with us please login with your personal info</p>
//                   <button className={classes.collapsedBtn} onclick="toggleOpen()">Log In</button>
//               </div>
//             </div>
//             <div className={`${classes.formWrapper} ${classes.login}`}>
//               <h2 className={classes.formHeading}>Log In To Your Profile</h2>
//               <form action="" className={`${classes.form} ${classes.login}`}>
//                 <div className={classes.formInputField}>
//                   <i className="fas fa-envelope"></i>
//                   <input className={classes.formInput} type="email" placeholder="Email" value="" />
//                 </div>
//                 <div className={classes.formInputField}>
//                   <i className="fas fa-key"></i>
//                   <input className={classes.formInput} type="password" placeholder="Password" value="" />
//                 </div>
//                 <button className={classes.formBtn} type="submit">Log In</button>
//               </form>
//             </div>
//           </div>
//           <div className={classes.signupWrapper}>
//             <div className={classes.collapsedSection}>
//               <div className={classes.hideSection}>
//                 <h2 className={classes.collapsedHeading}>New Here?</h2>
//                 <p className={classes.collapsedText}>Enter your personal details and start journey with us!</p>
//                   <button className={classes.collapsedBtn} onclick="toggleOpen()">Sign Up</button>
//               </div>
//             </div>
//             <div className={`${classes.formWrapper} ${classes.signup} ${classes.hidden}`}>
//               <h2 className={classes.formHeading}>Create Account</h2>
//               <form className={`${classes.form} ${classes.login}`}>
//                 <span className={classes.formSpan}>or use your email for registration:</span>
//                 <div className={classes.formInputField}>
//                   <i className="fas fa-user"></i>
//                   <input className={classes.formInput} type="text" placeholder="Name" value="" />
//                 </div>
//                 <div className={classes.formInputField}>
//                   <i className="fas fa-envelope"></i>
//                   <input className={classes.formInput} type="email" placeholder="Email" value="" />
//                 </div>
//                 <div className={classes.formInputField}>
//                   <i className="fas fa-key"></i>
//                   <input className={classes.formInput} type="password" placeholder="Password" value="" />
//                 </div>
//                 <button className={classes.formBtn} type="submit">Sign Up</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }

// export default withStyles(styles)(AuthForm);
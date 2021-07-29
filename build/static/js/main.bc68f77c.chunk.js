(this["webpackJsonpverkkokauppa-frontend"]=this["webpackJsonpverkkokauppa-frontend"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,j,u,d,l,b,O,h,p=n(0),x=n(83),m=n.n(x),f=n(7),g=n(6),v=n(26),A=Object(g.gql)(r||(r=Object(v.a)(["\n  query allProductsByCategory($category: String){\n    allProducts(category: $category) {\n      name\n      price\n      quantity\n      id\n      categories\n      description\n      comments {\n        user\n        product\n        content\n        grade\n      }\n      units_sold\n      average_grade\n    }\n  }\n  "]))),y=Object(g.gql)(c||(c=Object(v.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n"]))),S=Object(g.gql)(a||(a=Object(v.a)(["\nquery {\n  allCategories\n}\n"]))),N=Object(g.gql)(s||(s=Object(v.a)(["\n  query {\n    me {\n      username\n      id\n      cart {\n        productName\n        amount\n        price\n      }\n    }\n  }\n  "]))),k=Object(g.gql)(i||(i=Object(v.a)(["\n  mutation createUser($username: String!, $password: String!, $passwordConf: String!) {\n    createUser(username: $username, password: $password, passwordConf: $passwordConf) {\n      username\n    }\n  }\n"]))),w=Object(g.gql)(o||(o=Object(v.a)(["\n  mutation decreaseQuantity($name: String!, $quantity: Int!) {\n    decreaseQuantity(name: $name, quantity: $quantity) {\n      name\n      quantity\n    }\n  }\n"]))),C=(Object(g.gql)(j||(j=Object(v.a)(["\n  query findProduct($name: String!) {\n    findProduct(name: $name) {\n      name\n      price\n      quantity\n      average_grade\n    }\n  }\n"]))),Object(g.gql)(u||(u=Object(v.a)(["\n  mutation addComment($user: String!, $product: String!, $content: String! $grade: Int!) {\n    addComment(user: $user, product: $product, content: $content, grade: $grade) {\n      user\n      product\n      content\n      grade\n    }\n  }\n"])))),E=Object(g.gql)(d||(d=Object(v.a)(["\n  query allCommentsByProduct($product: String){\n    allComments(product: $product) {\n      user\n      product\n      content\n    }\n  }\n"]))),q=Object(g.gql)(l||(l=Object(v.a)(["\n  mutation addToCart($productName: String!, $price: Float!) {\n    addToCart(productName: $productName, price: $price) {\n      username\n      cart {\n        productName\n        price\n        amount\n      }\n    }\n  }\n"]))),G=Object(g.gql)(b||(b=Object(v.a)(["\n  mutation removeFromCart($productName: String!) {\n    removeFromCart(productName: $productName) {\n      username\n      cart {\n        productName\n        price\n        amount\n      }\n    }\n  }\n"]))),F=(Object(g.gql)(O||(O=Object(v.a)(["\n  query {\n    totalPrice\n  }\n"]))),Object(g.gql)(h||(h=Object(v.a)(["\n  mutation {\n    checkout {\n      username\n      cart {\n        productName\n        price\n        amount\n      }\n    }\n  }\n"])))),I=n(19),Q=n.n(I),M=n(34),U=n(2),R=(n(3),n(110)),T=n(113),B=n(112),L=function(e){var t=e.shownProduct,n=e.addToCart,r=e.setError,c=Object(p.useState)(""),a=Object(f.a)(c,2),s=a[0],i=a[1],o=Object(p.useState)([]),j=Object(f.a)(o,2),u=j[0],d=j[1],l=Object(p.useState)(null),b=Object(f.a)(l,2),O=b[0],h=b[1],x=Object(g.useQuery)(N),m=Object(p.useState)(!0),v=Object(f.a)(m,2),y=v[0],S=v[1],k=Object(g.useLazyQuery)(E),w=Object(f.a)(k,2),q=(w[0],w[1],Object(p.useState)(null)),G=Object(f.a)(q,2),F=G[0],I=G[1],L=Object(g.useMutation)(C,{refetchQueries:[{query:A}],onError:function(e){r(e)}}),J=Object(f.a)(L,2),P=J[0];J[1];if(Object(p.useEffect)((function(){if(t&&localStorage.getItem("shop-user-token")&&document.getElementById("buy-button")){d(t.comments);var e=document.getElementById("buy-button");t.quantity<1?e.disabled=!0:e.disabled=!1}})),Object(p.useEffect)((function(){x.data&&x.data.me&&I(x.data.me.username)}),[x]),Object(p.useEffect)(Object(M.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(x.data&&x.data.me&&t)){e.next=5;break}return e.next=3,u.filter((function(e){return e.user===x.data.me.username}));case 3:e.sent.length>0?S(!1):S(!0);case 5:case"end":return e.stop()}}),e)})))),x.loading)return Object(U.jsx)("div",{children:"loading..."});if(!t)return null;if(console.log("tuote ",t),console.log("kom",u.length),console.log("onko sallittu ",y),!localStorage.getItem("shop-user-token"))return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:t.name}),Object(U.jsx)(R.a,{striped:!0,children:Object(U.jsxs)("tbody",{children:[Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{}),Object(U.jsx)("th",{children:"price"}),Object(U.jsx)("th",{children:"description"}),Object(U.jsx)("th",{children:"quantity"}),Object(U.jsx)("th",{children:"average grade"})]}),Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t.name}),Object(U.jsxs)("td",{children:["$",t.price]}),Object(U.jsx)("td",{children:t.description}),Object(U.jsx)("td",{children:t.quantity}),Object(U.jsx)("td",{children:t.average_grade})]})]})}),"Log in to see the reviews for this product"]});var D=Object(U.jsx)(T.a,{id:"buy-button",onClick:function(){return n(t)},children:"add to cart"}),Z=function(){var e=Object(M.a)(Q.a.mark((function e(n){var r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=t.id,P({variables:{user:F,product:r,content:s,grade:O}}),i(""),h(null);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:t.name}),Object(U.jsx)(R.a,{striped:!0,children:Object(U.jsxs)("tbody",{children:[Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{}),Object(U.jsx)("th",{children:"price"}),Object(U.jsx)("th",{children:"description"}),Object(U.jsx)("th",{children:"quantity"}),Object(U.jsx)("th",{children:"average grade"}),Object(U.jsx)("th",{})]}),Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:t.name}),Object(U.jsxs)("td",{children:["$",t.price]}),Object(U.jsx)("td",{children:t.description}),Object(U.jsx)("td",{children:t.quantity}),Object(U.jsx)("td",{children:t.average_grade}),Object(U.jsx)("td",{children:D})]})]})}),Object(U.jsx)(R.a,{striped:!0,children:Object(U.jsx)("tbody",{children:u.map((function(e){return Object(U.jsxs)("tr",{children:[Object(U.jsxs)("th",{children:[e.user," gave grade ",e.grade," and commented:"]}),Object(U.jsx)("tr",{children:Object(U.jsx)("th",{children:e.content})})]},e.id)}))})}),!1!==y&&Object(U.jsxs)(B.a,{onSubmit:Z,children:[Object(U.jsx)("h3",{children:"Review this product"}),Object(U.jsx)(B.a.Label,{children:"Grade (1-5): "}),Object(U.jsx)("input",{id:"grade",type:"number",min:"1",max:"5",size:"1",value:O,onChange:function(e){var t=e.target;return h(parseInt(t.value))}}),Object(U.jsx)("br",{}),Object(U.jsx)("textarea",{value:s,onChange:function(e){var t=e.target;return i(t.value)},className:"text",cols:"50",rows:"5"}),Object(U.jsx)("div",{children:Object(U.jsx)(T.a,{type:"submit",children:"Review this product"})})]})]})},J=n(15),P=function(e){var t=e.myCart,n=e.setMyCart,r=e.addToCart,c=e.setError,a=Object(g.useQuery)(S),s=Object(g.useLazyQuery)(A),i=Object(f.a)(s,2),o=i[0],j=i[1],u=Object(p.useState)(""),d=Object(f.a)(u,2),l=(d[0],d[1]),b=Object(p.useState)([]),O=Object(f.a)(b,2),h=O[0],x=O[1],m=Object(p.useState)([]),v=Object(f.a)(m,2),y=v[0],N=v[1];Object(p.useEffect)((function(){a.data&&(x(a.data.allCategories),o())}),[a,o]),Object(p.useEffect)((function(){j.data&&N(j.data.allProducts)}),[j]);var k=Object(J.g)("/products/:id"),w=k?y.find((function(e){return e.id===k.params.id})):null;if(a.loading||j.loading)return Object(U.jsx)("div",{children:"loading..."});var C=function(e){o({variables:{category:e}}),l(e||"")},E={buttonStyle:{marginTop:"3px",marginBottom:"3px",marginRight:"3px",marginLeft:"3px"}};return Object(U.jsxs)("div",{children:[Object(U.jsx)(J.c,{children:Object(U.jsx)(J.a,{path:"/products/:id",children:Object(U.jsx)(L,{shownProduct:w,myCart:t,setMyCart:n,addToCart:r,setError:c})})}),Object(U.jsx)("h2",{children:"Search products"}),Object(U.jsxs)("div",{className:"navBar",children:[h.map((function(e){return Object(U.jsx)(T.a,{style:E.buttonStyle,onClick:function(){return C(e)},children:e})})),Object(U.jsx)(T.a,{style:E.buttonStyle,onClick:function(){return C("")},children:"trending"})]}),Object(U.jsx)(R.a,{striped:!0,children:Object(U.jsxs)("tbody",{children:[Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{}),Object(U.jsx)("th",{children:"price"}),Object(U.jsx)("th",{children:"quantity"})]}),y.map((function(e){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:Object(U.jsx)("a",{href:"/products/".concat(e.id),children:e.name})}),Object(U.jsxs)("td",{children:["$",e.price]}),Object(U.jsx)("td",{children:e.quantity})]},e.name)}))]})})]})},D=function(e){var t=e.setToken,n=e.setNotification,r=Object(p.useState)(""),c=Object(f.a)(r,2),a=c[0],s=c[1],i=Object(p.useState)(""),o=Object(f.a)(i,2),j=o[0],u=o[1],d=Object(J.f)(),l=Object(g.useMutation)(y,{refetchQueries:[{query:N}],onError:function(e){n("Invalid credentials"),setTimeout((function(){n("")}),1e4)}}),b=Object(f.a)(l,2),O=b[0],h=b[1];Object(p.useEffect)((function(){if(h.data){var e=h.data.login.value;t(e),localStorage.setItem("shop-user-token",e),localStorage.setItem("username",a),d.push("/"),window.location.reload()}}),[h.data]);var x=function(){var e=Object(M.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O({variables:{username:a,password:j}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Login"}),Object(U.jsx)(B.a,{onSubmit:x,children:Object(U.jsxs)(B.a.Group,{children:[Object(U.jsx)(B.a.Label,{children:"username:"}),Object(U.jsx)(B.a.Control,{id:"username",type:"text",value:a,onChange:function(e){var t=e.target;return s(t.value)}}),Object(U.jsx)(B.a.Label,{children:"password:"}),Object(U.jsx)(B.a.Control,{id:"password",type:"password",value:j,onChange:function(e){var t=e.target;return u(t.value)}}),Object(U.jsx)(T.a,{id:"login-button",type:"submit",children:"login"})]})}),Object(U.jsxs)("p",{children:["New user? Register ",Object(U.jsx)("a",{id:"register-link",href:"/register",children:"here"})]})]})},Z=function(e){var t=e.setNotification,n=Object(p.useState)(""),r=Object(f.a)(n,2),c=r[0],a=r[1],s=Object(p.useState)(""),i=Object(f.a)(s,2),o=i[0],j=i[1],u=Object(p.useState)(""),d=Object(f.a)(u,2),l=d[0],b=d[1],O=Object(J.f)(),h=Object(g.useMutation)(k,{onError:function(e){t("Registration failed"),setTimeout((function(){t("")}),1e4)}}),x=Object(f.a)(h,2),m=x[0],v=x[1];Object(p.useEffect)((function(){v.data&&(a(""),j(""),b(""),O.push("/login"))}),[v.data]);var A=function(){var e=Object(M.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m({variables:{username:c,password:o,passwordConf:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Create a new account"}),Object(U.jsx)(B.a,{onSubmit:A,children:Object(U.jsxs)(B.a.Group,{children:[Object(U.jsx)(B.a.Label,{children:"username:"}),Object(U.jsx)(B.a.Control,{id:"username",required:!0,minLength:"3",maxLength:"16",type:"text",value:c,onChange:function(e){var t=e.target;return a(t.value)}}),Object(U.jsx)(B.a.Label,{children:"password:"}),Object(U.jsx)(B.a.Control,{id:"password",required:!0,minLength:"8",maxLength:"32",type:"password",value:o,onChange:function(e){var t=e.target;return j(t.value)}}),Object(U.jsx)(B.a.Label,{children:"password confirmation:"}),Object(U.jsx)(B.a.Control,{id:"passwordConf",required:!0,minLength:"8",maxLength:"32",type:"password",value:l,onChange:function(e){var t=e.target;return b(t.value)}}),Object(U.jsx)(T.a,{id:"register-button",type:"submit",children:"register"})]})})]})},z=function(e){var t=e.user,n=e.setNotification,r=e.setError,c=Object(p.useState)([]),a=Object(f.a)(c,2),s=a[0],i=a[1],o=Object(g.useMutation)(G,{refetchQueries:[{query:N}],onError:function(e){r(e)}}),j=Object(f.a)(o,2),u=j[0],d=(j[1],Object(g.useMutation)(F,{refetchQueries:[{query:N}],onError:function(e){r(e)}})),l=Object(f.a)(d,2),b=l[0];l[1];if(Object(p.useEffect)((function(){i(t.cart)})),s<1)return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Your shopping cart"}),"Your shopping cart is currently empty."]});var O=0;s.map((function(e){return O+=e.price*e.amount})),O=O.toFixed(2);var h=function(){var e=Object(M.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0;t<s.length;t++)b(),n("Your purchase was successful"),setTimeout((function(){n("")}),5e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Your shopping cart"}),Object(U.jsx)(R.a,{striped:!0,children:Object(U.jsxs)("tbody",{children:[Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{}),Object(U.jsx)("th",{children:"price per unit"}),Object(U.jsx)("th",{children:"amount"}),Object(U.jsx)("th",{})]}),s.map((function(e){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:e.productName}),Object(U.jsxs)("td",{children:["$",e.price]}),Object(U.jsx)("td",{children:e.amount}),Object(U.jsx)("td",{children:Object(U.jsx)("button",{onClick:function(){return function(e){var t=e.productName;u({variables:{productName:t}}),n("Removed ".concat(t," from cart")),setTimeout((function(){n("")}),5e3),O=-e.price}(e)},children:"remove"})})]},e.product)})),Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"grand total:"}),Object(U.jsxs)("th",{children:["$",O]})]})]})}),Object(U.jsx)("button",{onClick:function(){return h()},children:"checkout"})]})},V=function(e){var t=e.message;return console.log(t),""===t?null:t.match("^Added")||t.match("^Your purchase was successful")?Object(U.jsx)("div",{className:"addProd",children:t}):(t.match("^Removed")||t.match("^Make")||t.match("^Invalid"),Object(U.jsx)("div",{className:"removeProd",children:t}))},Y=function(e){var t=e.logout,n={paddingRight:5};return localStorage.getItem("shop-user-token")?Object(U.jsxs)("div",{className:"navBar",children:[Object(U.jsx)("a",{href:"/products",style:n,children:"products"}),Object(U.jsx)("a",{href:"/shopping-cart",style:n,children:"shopping cart"}),Object(U.jsx)("a",{href:"/",onClick:t,children:"logout"})]}):Object(U.jsxs)("div",{className:"navBar",children:[Object(U.jsx)("a",{href:"/products",style:n,children:"products"}),Object(U.jsx)("a",{href:"/login",id:"login",style:n,children:"login"})]})},K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADRCAMAAADrPu6hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEX4+PjIyMmAgINdXWA5OT2NjY/T09RoaGt1dXfr6+y8vL1nZ2qwsLJ/f4JEREhFRUmMjI6YmJp0dHfg4OCkpKWxsbJcXF+kpKZQUFTJycr39/dQUFO8vL5RUVQ6Oj6vr7GXl5nHx8jf39+wsLGZmZtRUVVpaWyBgYT39/iLi43q6uvU1NVeXmHs7O2OjpC9vb52dnilpadGRkq7u7zS0tP///93k/MQAAAAAWJLR0Q13rbZawAAAAd0SU1FB+UHHQw4DI09encAAAABb3JOVAHPoneaAAAPsUlEQVR42u2d2WKyyBKAJRIUURRRkpF/jHGiyVnm7O//bIeuqm56Q1BAILGuDBrDR61dvWQ0eshDHvKQhzzkIQ95yEMe8pCHPKTH4jyNXXf87HV9H20iTlySidP1vbQlz64kz13fTTvy5Coy9bu+ofYZM9fs+o6alxmSBXPHmS1CeP3U9T01Lf6SYYUUb/wVUK66vquGJQLGPHXMQJnfK8aCIkM5PToMct31fTUqc4Y0Vy6t2aW46xtrUsYs5qiXYga58aLpZPK0/Q6wsU1rC6U2yLNmPNAEuskwEv2io2ZNRPNfXl131vX93iRMaZF2zR+rtcGEXYsg0yy7vt+bZGxJFxpjFpfipyW9HOQohd24dgnLATeMnGiNL5c57xDzp2e6pCPjxEnOFziRadpDEMdMIBMFkg/CwkUMVe4Qi4TIgBSRdca6BfyHBURYf5iRJzKCq8iR0VYKQAt8MxlkElnrkDG6X44XJlLqyJ7Jchr9NrAQG+iQcxx3ccRk7vtS6ojzCmEymUTPk6ch1EAG5FpKGeHKE5c20jNQCoVd1wg3QOa3v+bet3Gl6ORv1qlCOQDT1SG5naabvGiP9XrOd2bRIgiVkNRn0SB/m+KNq3VNahupbMmmg/7bqwz5ixeoelWzNuu57e+iDuo/5Ioz+dGrcDM9FUIXSG4eIGK4GggkFQNU2iSbxFaER6p6t6/otb6zdwfR12ORc/XyioqJKbjanoSAJMS37CVAHrpGKBcp68PPZZA4dAbErF4fCOSLq4bTy5CoxTCSr/cdMka9gJ1WgOSIvnL9vWuKi+JgTpRuuggSyvUpRt+V9Om+Q/oYbNx0rlbYSSEkJkWlJOg3JO9LpXP9neASZKrllj5D/pooAbUUMkalhxv9wwB57BrHItxO3cDadwuMgUVMLZClOXIEyP4VPKJpExS0FgOt4onzWWjzw32E9LevJYgEKcw4lifazZmf/kH6z8tSRIKMVMQUe1vmb/UOUsxvBBd74IEYB1MaZRHYsQ7AqBfSJ0jenJlEmUxInqOtFk4CbHX4vB0JJZxT0AKAAr1PkJFrl6WaRwByGfFOFlVDaALDhdQCitRwdVNR8OHj6D/kzKRLkEjpA+SQcjWU2HNI7yBhZidzx5mjBJ6VElD8SERgC3r/IT1rfGRWLOapcsREi8DzgQSekR3SEQFFTvzGB6OQ5rUGCbkhSF9ZDLqq+J0DgYwAUhhqiPPnVVdJ9g4yLYQUiNkI2iuqU4cBGdjSObu6FIj0LNzKyx8GArnW0yLk06TidzLIXs1q2SEjI/NHYbipOrPKJrZ61f5YWyHnenFzlUz6BhlZg6YjTbZ+D0hLB8Op5VTDgayxkKx3kM5PgXRsVx+QA4OMrZDe94IcufqmAbpaY3FnLyEj29UHZDnkU6/2VKTNQ+L4ZdKjia3Auuy41hqVPW+X9GatpH0YYr14LaS77AumHTJtBDLD7IdvLqzDkKAupBh29yIE2Sv02pDvXr6r4qnzfFIE6V7/VQpkNvL+vTfabA9SwXzuNATNrcVrbcgpZsn5JI+0HUI67UBmJoq9hfzQidfKrrlD6TOkw1PIBKny6ZSqxzG0AmkOQ2pD4nr7yR8qZkWbbRzSPnlXG/KdzPRVw6Sf7ww5ahxyRtFVxfS4b47LXXMAkPnaOg/1N9FC0LRsfNIKZGC7eHP/Q16sFK9CafpWYJYU7gODZJOckE+IyuPrDi9iNg+ZNA05USAzbbILY26iYnnlyz0hA9tanKQmpLr3hSlzKeINxywuDlqBdG0Xb4ZcGpB4BExevnLMogjUPOS4aUiWQfSFL7CdXXJEjmkvDpqGxMWuRhR4vb2TFVv3vuCpRct8PjDGSGvdTdosJF/Pa2jNvR0SCh7L5CbmD8kP8Rgj2xRhk5BiyXKjkBuNJZeVquIPt+iTzUHmY6BmIZ+0DMLFByihYo+WztpiT1OQAnHBVlkb2x5qQLKbT80bdE5sbPKmELMr7fmkqJYXseXghFqQ9lWFuH5tzdU2Y8Ru6hZsJm0CUox7Aub1MwuQfzOk3dFmLHem/KpzZp9J4EkfbF9SH9LXNoE4lifv3Ajpf8I3r7/UhwqL8w/KT+EBE6p1jUldSGnFnASkF683QtLehERNuy9QApGl0rpLtoIUco21Tq8J+cLXPXJE1GszkN5JAEgXGXhICvM/lhQJRljRJs2vwZtRYsw3R5JeX5uAnON3KZEaFcd3VyJiQL65Ng27vuRZgyNCNQALIOtDkh2GSsyBKBpQUYM79APxgZPb+K5gNaTCHbziIN0CubkaknJ7Iuf2+CylRh1x5ItGe1Pi8w0gKQ9nqNeA9tdb9nleBcl3esvXwDjJUp2xhkj9riYnD160vTkcEdjS2pA0ogjlfABYFFMxMaZKuoBI3GDcccTeQZpcQtPlSYSNmrX28nWQ9Ajlnc3xZ05FiG/qL30aQaqOiBKOP2hEFMcCmIfvXAdJalR2yzBLZel+xHO/jhgjeEPW6msnk/EAJCUzFspXN0NSEkqkcSEcV0MHoX3aEHm2aSbs5LtzaAs5XQjkoap5fhtcqnQUnTM21AjDDUz3GHsMRFSj675V+QvVEXk3F7OGth2pALLCfDo3E+mZAQBF0ZkyuhJCLhw2oUcJkW7CnyoVHZeNmSg3lSDpFCVpEz5UBDTagHgTHnS344PlpIG1TNIeK06FT9DcXOWYkE4FSB7QpC9kf4E0B+GVW6305D/opg71EX9JrQ26CX9ipDIZ0jEuXYbk1YVk+uCfqDlkCQxlOSfXCFO3Sb6nnoUPepYwbHXX1pjtGuG1FJJK/TwPoX/S0B9KuMDwOe/clBolV5T2nD9bvZEEGr+KYTHIC2dgxlP1CY7QUskZgSU1TAYNuAk12hGxgxYULaaBtsxYVrLFTSWh8CgdbMJqKtIqZEbzQBCBGNatchTERf7AHC2V6YIn61SEpNQoWSoUwhRj4AEYIVUg5r2sW8XJfTGMZLVlQSK9ZCM+LBGTTrkshuTbRnOzgLKO94tONo4cMambG/MCzjhtpvS8YKTMLbYQklJj7nHwVwkRCgGDI99Nm9YucfIDvNdGP9zD87wv/TYc5DHm6i6A5L0FcVgU+AeNZiAzGxzU1WkEUZyJLB/flcvaumVAkTmbflk6FyB5TBVFHCBSyMbXhjM2ikinIqQFexwzc1yWBW5cu0mT3CYkL6FEdEQsKooh3hjrAGanJhFxvHRhw6MXllPiSee4NEyHFO0TXsQpiFAaGCUcH2w0hYhz2JfWGlSihBnDV8eAFKmJW6qCCJ5qJGERbxpD5EfpXlihxyhLt7b6/HQhGVIczs+zv4IInmqe5jNbNo6Iq3GYGoq1xabty5cpgllO4hxSDGd4UagiPlndhFtq7fJGFbZObOO6F7W1ysNnsYDJLjmk80nrOnngpPaN/MOb0XLjMfUvf22UkQWezCRZd/GzWFvvobsvXSctVshnw5nzJUQcPhpZY/S3v+NvBcemJzoO8OTBp8bFJutnz+JUFn98On1nyhfnKlQpVxzkh5WB+Oc/8NfS9+bnciI0rx1LA/uPwo99ZdZ44W2U3cqVRCBuTxKiw5S8MKvtf1JqPLRxZMSMBwrwqQvKPCYX35a+xEQUP8TMVc1R8ejPf3FLbQERCjFOEVxOmbsD03WJZx7RMRPZNgUieGZqxpvRv/+Dlvrflk7+yCGBwnXPxftNWGg5lYTZ3exw2Byttok6NTm8Marx0NoWEF+uUCBA2pTpfZ72++kMlFl5O0qsIEJzw4w3WYVDlvq/Fg9wUWpNXMlmKHOF97GPKilTunnhfj44o8XjeA/2rdUzarSu4nvoGq4HffGA/ZtFBx7Dflq+hepFSffYrrKsRBq3k/1LICElZja7lS6FbnLc7UZ+CPMc72m5zcLNC9tkzW+bM8bTO1gqQWpNwC/MA2NH+ggdVI6mDTa9vJA0fXbzooEIdmvpQ/kflP1n7Z+mZNmFjJ65F3Uefw6+G+IFj2Wb07bgG8FSN/zOZ2Cp5mINGhiHrWR/XVLbePEYyDabUNtxLub2d2+s2j3ZlkXBQEJ03FmEtXH4ZKmr1tKGIllWsFDuZmlus5mZslDjLKXZT/+QGfX+rAdasMFwxhXHsr8tptKosXYztbIkyupniQJsFjBYRN2f9upcxHHhGpjQshFqZN1Um8eRGm1G3JawcGqtvdFm9+dMz94itdSc4JoS5hYmT7kaIXbazBHVeB9nFPLF4sxZvRvvN1/Y7P4zxrV5xm/u3hOB6QNiTgWWainoSY3r+zijJCxpKGP/aL/ff/7KKDahwLQKRqD9+Iz1ZyCvvrVWMTjTmM7uZ6lC2OBBMlk8FXl/evbINS8MPxATkzqvaaBqtdXbVKjeKaYat6qY7MpNDzBm2o+35JpZ9r+Mmaw8QoQIaw2cpMbujg9gRSuPskEWR3fHFajotN29p2WY/nvusYwksQZOLHHaG1FVENaioSpngyde7Dz43+djh5tkYZEjfUs23MjLHVlw+Ub9Wf96AoNmUKafuGMMNZjzn4XnnUuGWSxR2lM8qbH7Uz/ZaHHPRpNsoofGzpDzM28lzOJAO8LBhz1wohpbauFcKajMDwwmXGssGbJ51jJMsFSrqnDAYbfiVjBK3vd4B3b3FvJihqGf4QVhWkeTzFIXVlVhUL1j+i99mJD/ASND4phe6H6OZExDmxhTbV+IufGehWo5JPUGYJi1O3BtZk5KYdGKyerUgjYNqvG+eaPK1pAvSIxYka4wEo3e8i6JgQldKjsGqvHeAafa/hco5pDiuIYXiXwE9u4NB9UwEwYtY7sz0pa5O/Q3dMhqfxGKOXDNryy67sfatqzdO/3nGkAM7IUaqrGDQrXyViYcRkG/itln4Fvf/1xKdbkmoMZOCtUrNmxRI2db9GhwpVLRVBuqsZsK56pdaVDUFZdyfvbuuuDbQI1dFapXbr3DRk7RJPRb0cJPUOP9Khwb5FWY70WTQExC+4otUGOHher12yixBXK2Wt7KtkOiYzWObtssiunENmR2LPbatRpvhGTFekHD3NWX0nWvxlshuTLNOOtqk2I9UGMOeTUleqYx+lBPbcG5uI7VWANSNNQ/9f8OlkPCJEHXTRwZUsWsxIyeqTbtJEhH7aAPFJJPXMqYAhL6yV22VO2QN3kO7zQ/k1FS4KHOeA96cU1AcptlvXVfQOISjj54owF542PHDQRotWwbvoPTWV3nxmYhs3KW/zPCJVt93OqquO4g2fyBq0if1KhB1rmxo4y56JMaG4SkNjQg9iNvFEHWw9wdV0GwfuuZFhuG7K/sfgLlj4T8lpQ/E/I7Yv5UyO9H+YD8LrL7CZQVIIfPvCun/BGQw5fd7gdg/mjI70T5f0pxSBR5cxkUAAAALnRFWHRDcmVhdGlvbiBUaW1lAFRodSAyOSBKdWwgMjAyMSAwMzo1NDo0NiBQTSBFRVNUNeefMwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNy0yOVQxMjo1NTo0OCswMDowMIVFZMYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMjlUMTI6NTU6NDgrMDA6MDD0GNx6AAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAAABJRU5ErkJggg==",W=n(111),X=function(){var e=Object(p.useState)(""),t=Object(f.a)(e,2),n=(t[0],t[1]),r=Object(p.useState)(""),c=Object(f.a)(r,2),a=c[0],s=c[1],i=Object(g.useQuery)(N),o=Object(g.useMutation)(w,{refetchQueries:[{query:A}],onError:function(e){k(e)}}),j=Object(f.a)(o,2),u=(j[0],j[1],Object(g.useMutation)(q,{refetchQueries:[{query:A}],onError:function(e){k(e)}})),d=Object(f.a)(u,2),l=d[0],b=(d[1],Object(p.useState)(null)),O=Object(f.a)(b,2),h=(O[0],O[1]),x=Object(g.useApolloClient)(),m=Object(p.useState)([]),v=Object(f.a)(m,2),y=v[0],S=v[1];Object(p.useEffect)((function(){document.title="Pennywise Web Store"}),[]);var k=function(e){n(e),setTimeout((function(){n("")}),1e4)};if(i.loading)return Object(U.jsx)("div",{children:"loading..."});return localStorage.getItem("shop-user-token")?Object(U.jsxs)("div",{className:"container",children:[Object(U.jsxs)("div",{className:"header",children:[Object(U.jsx)(W.a,{src:K,className:"logoDetails"}),Object(U.jsx)("h1",{children:"Pennywise Web Store"})]}),Object(U.jsx)(V,{message:a}),Object(U.jsx)(Y,{logout:function(){h(null),localStorage.clear(),x.resetStore()}}),Object(U.jsxs)(J.c,{children:[Object(U.jsx)(J.a,{path:"/shopping-cart",children:Object(U.jsx)(z,{user:i.data.me,setNotification:s,setError:k})}),Object(U.jsx)(J.a,{path:"/products",children:Object(U.jsx)(P,{myCart:y,setMyCart:S,addToCart:function(e){var t=e.name,n=e.price;console.log("prod ",t),l({variables:{productName:t,price:n}}),s("Added ".concat(t," to cart")),setTimeout((function(){s("")}),5e3)},setError:k})})]})]}):Object(U.jsxs)("div",{className:"container",children:[Object(U.jsxs)("div",{className:"header",children:[Object(U.jsx)(W.a,{src:K,className:"logoDetails"}),Object(U.jsx)("h1",{children:"Pennywise Web Store"})]}),Object(U.jsx)(V,{message:a}),Object(U.jsx)(Y,{}),Object(U.jsxs)(J.c,{children:[Object(U.jsx)(J.a,{path:"/login",children:Object(U.jsx)(D,{setToken:h,setNotification:s})}),Object(U.jsx)(J.a,{path:"/register",children:Object(U.jsx)(Z,{setNotification:s})}),Object(U.jsx)(J.a,{path:"/products",children:Object(U.jsx)(P,{})})]})]})},H=(n(107),n(46)),$=n(67),_=n(86),ee=n(87),te=[{request:{query:k,variables:{username:"Harri",password:"salainen",passwordConf:"salainen"}},result:{data:{createUser:{username:"Harri",password:"salainen",passwordConf:"salainen"}}}},{request:{query:y,variables:{username:"Harri",password:"salainen"}},result:{data:{login:{value:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NjFjNWE2LTc1NjYtNDA5Ny04NDUzLWM5MjU0NDE0ZTM5NyIsImVtYWlsIjoiaGVoZUBoZWhlLmZpIiwiaWF0IjoxNjIzNzY1NjkwLCJleHAiOjE2MjM3NjkyOTB9.WMQnhKrWbjqPxiieWsVMY4x5GA6pi91DM9zo5eo0GFY"}}}},{request:{query:N},result:{data:{me:{username:"Harri"}}}}],ne=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV,re=Object(ee.a)((function(e,t){var n=t.headers,r=localStorage.getItem("shop-user-token");return{headers:Object($.a)(Object($.a)({},n),{},{authorization:r?"bearer ".concat(r):null})}})),ce=new g.HttpLink({uri:"/graphql"}),ae=new g.ApolloClient({cache:new g.InMemoryCache,link:re.concat(ce)}),se=function(e){var t=e.children;return"test"===ne?Object(U.jsx)(_.a,{mocks:te,defaultOptions:{watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},children:Object(U.jsx)(U.Fragment,{children:t})}):Object(U.jsx)(g.ApolloProvider,{client:ae,children:Object(U.jsx)(U.Fragment,{children:t})})};m.a.render(Object(U.jsx)(se,{children:Object(U.jsx)(H.a,{children:Object(U.jsx)(X,{})})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.bc68f77c.chunk.js.map
import React, { Component, useEffect, useState } from "react";
import {
  AddCommnet,
  Commnet,
  CommnetProfileDiv,
  CommnetProfileImg,
  Commnets,
  CommnetUser,
  DivInfoPlace,
  DivInfoPlaceItem,
  DivInfoPlaceItemQ,
  DivInfoPlaceItemR,
  DivLikeAndImage,
  DivMap,
  DivWelfare,
  DivWelfareItem,
  DivWelfareItemImg,
  DivWelfareItemTitle,
  FromCommetDiv,
  FromCommetdivSubmit,
  FromCommetInput,
  FromCommetSubmit,
  ImagePost,
  ImagePostDiv,
  ImgWelf,
  InfoDiv,
  LikeBtn,
  LikeBtnParent,
  LineInfo,
  MapElement,
  ParentPost,
  TextCommnet,
  UserName,
} from "./PostElement";
import {
 
  Navigate,
} from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import ShowMap from "../../../Components/ShowMap";
import { useParams } from "react-router-dom";
const url = process.env.REACT_APP_URL_API;

const Post= (props)=> {
    const [post, setPost] = useState({});
    const [state, setstate] = useState(useParams());
    const [valueCommnet, setValueCommnet] = useState('');
    const [locition, setLocition] = useState();
    const [hasNav, setNav] = useState(false);
    
    
    
    const sevalueCommnet=(e)=>{
      setValueCommnet(e.target.value)
    }
    useEffect(() => {
      console.log('first')
      const setPosta = async () => {
        let goPost;
        await fetch(`${process.env.REACT_APP_URL_API}/v1/post/${state.id}/`).then(resp => {
            return resp.json()
        }).then(resps => {
            goPost = resps
            console.log(resps);
            const getlocition = goPost.location.split(',')
            console.log(getlocition)
            setLocition(getlocition)
            setPost(goPost)
        })
    }
    setPosta()
    }, []);
    const formHandel = async (e)=>{
     
      e.preventDefault()
      if(localStorage.getItem('token')){
      let newForm=  new FormData()
      newForm.append('body',valueCommnet)
      
      await fetch(`${process.env.REACT_APP_URL_API}/v1/post/${post.id}/new-comment/`,{
        method:'post',
        headers:{
          Authorization: `Token ${localStorage.getItem('token')}`
        },
        body:newForm
      }).then(resp=>{
        let commnet = {}
      commnet.body = valueCommnet
      commnet.full_name=localStorage.getItem('first_name') + '' + localStorage.getItem('first_name')  
      commnet.profile_pic =  localStorage.getItem('profile_pic')
      let copyPost = post
      copyPost.comments.push(commnet)
      setPost(copyPost)
      setValueCommnet('')
      console.log(resp);
        window.location.replace(`/post/${post.id}`)
      })
    }else{
      alert('لطفا وارد حساب کاربری خود شوید')
    }
    }
    const handelLike =()=>{
      if(localStorage.getItem('token')){
      fetch(`${process.env.REACT_APP_URL_API}/v1/post/${post.id}/like/`,{
             headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        },
      }).then(resp=>resp.json()).then(resp=>{
        let copyState ={...post}
        if(resp.msg ==='Liked'){
        copyState.does_user_likes = true
        copyState.likes =Number(copyState.likes)+1 
        setPost(copyState) 
      }else if('Unliked'){
        copyState.does_user_likes = false
        copyState.likes =Number(copyState.likes)-1 
        setPost(copyState) 
        console.log(resp);

      }
      
      })
    }
    else{
      alert('لطفا وارد  حساب کاربری خود شوید')
    }
      
    }
    return (
      <>
      {
        <>
      {post ? 
      <ParentPost>
      <DivLikeAndImage>
          <ImagePostDiv>
            <ImagePost src={post.image} />
          </ImagePostDiv>
          <LikeBtnParent>
            <LikeBtn onClick={handelLike}>
              <span>{post.likes}</span>
              <AiOutlineHeart />
            </LikeBtn>
          </LikeBtnParent>
        </DivLikeAndImage>

        <LineInfo>
          <InfoDiv> اطلاعات : </InfoDiv>
        </LineInfo>

        <DivInfoPlace>
          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ>استراحت گاه :</DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>
              {post.rest_place ? "دارد" : "ندارد"}
            </DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ>استان:</DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.province}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> ادرس : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.postal_address}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> نوع منطقه : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.location_kind}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>
        </DivInfoPlace>
        <LineInfo>
          <InfoDiv> مکان : </InfoDiv>
        </LineInfo>
        <DivMap>
        {locition ? 
          <MapElement><ShowMap loc ={locition} /></MapElement>
          :null}
          </DivMap>

        <LineInfo>
          <InfoDiv> امکانات رفاهی : </InfoDiv>
        </LineInfo>
        <DivWelfare>
          {post.welfare_places? post.welfare_places.map((welfare) => {
            return (
              <DivWelfareItem>
                <DivWelfareItemTitle><ImgWelf src={welfare.image} /></DivWelfareItemTitle>
                <p style={{fontWeight:'bold'}}>
                {welfare.title}
                </p>
                  </DivWelfareItem>
            );
          }):null}
        </DivWelfare>
        <LineInfo>
          <InfoDiv> نظرات : </InfoDiv>
        </LineInfo>
        <Commnets>
           {post.comments?post.comments.map((commnet) => {
            return (
              <Commnet>
                <CommnetProfileDiv>
                  <CommnetProfileImg src={`${url}${commnet.profile_pic}`} />
                </CommnetProfileDiv>
                <CommnetUser>
                  <UserName>
                    {commnet.full_name} :
                  </UserName>
                  <TextCommnet>
                    {commnet.body}
                  </TextCommnet>
                </CommnetUser>
              </Commnet>
            );
          }):null}
        </Commnets>
        <AddCommnet>
        <div>
          <label> ثبت نظر : </label>
        </div>
        <FromCommetDiv onSubmit={formHandel}>

        <FromCommetInput value={valueCommnet} name ='valueCommnet' onChange={sevalueCommnet}>  </FromCommetInput>
        <FromCommetdivSubmit>
        <FromCommetSubmit type='submit' value='ثبت' / >
        </FromCommetdivSubmit>
        </FromCommetDiv>
        </AddCommnet>
        </ParentPost>
        : null }
        </>
      }
        </>
    );
}

export default Post;

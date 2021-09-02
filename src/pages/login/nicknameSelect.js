import { Input, Navbar, Page } from "framework7-react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isAuthAtom, teamIdAtom, uidAtom } from "../../atoms";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { signUp } from "../../api/authApi";
import { useMutation, useQuery } from "react-query";
import { useEffect } from "react";
function NicknameSelectPage({ f7router }) {
  const [teamId, setTeamId] = useRecoilState(teamIdAtom);
  const [uid, setUid] = useRecoilState(uidAtom);
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  const { mutate } = useMutation(signUp, {
    onSuccess: (data) => {
      if (data.status === 200) {
        setIsAuth(true);
      }
    },
  });

  return (
    <Page style={{ backgroundColor: "white" }} stacked>
      <Navbar backLink></Navbar>
      <p className="text-xl text-center">닉네임을 입력해주세요</p>
      <p className="text-base text-center">2-9자로 작성해 주세요.</p>{" "}
      <Formik
        initialValues={{
          nickname: "",
          teamId: teamId,
        }}
        validationSchema={Yup.object().shape({
          nickname: Yup.string()
            .required("닉네임 입력은 필수입니다.")
            .min(2, "최소 두글자를 넣어주세요")
            .max(9, "최대 9글자까지 가능합니다.")
            .matches(
              /^[aA-zZ\s,0-9,ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
              "특수문자는 사용할 수 없습니다."
            ),
        })}
        onSubmit={(values) => {
          mutate({
            id: uid,
            provider: "kakao",
            nickname: values.nickname,
            teamId: teamId,
          });
          console.log(uid, values.nickname, teamId);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div
              className={
                errors.nickname
                  ? "mx-auto w-80 h-11 rounded-2xl border border-danger-500 bg-grayscale-100 flex items-center"
                  : "mx-auto w-80 h-11 rounded-2xl border border-primary-500 bg-grayscale-100 flex items-center"
              }
            >
              <Field
                id="nickname"
                onChange={handleChange}
                value={values.nickname}
                className="ml-4 mr-4 w-64 h-10 bg-grayscale-100"
                validate={errors.nickname}
                name="nickname"
              />
              <div>
                {values.nickname ? (
                  <img
                    className="grayFilter300"
                    src="/assets/icons/18px/Delete.png"
                    alt="delete"
                    onClick={handleReset}
                  />
                ) : (
                  <img
                    className="grayFilter300"
                    src="/assets/icons/16px/Edit.png"
                    alt="edit"
                  />
                )}
              </div>
            </div>
            <div className="w-64 h-10 ml-12">
              {errors.nickname && touched.nickname ? (
                <div>{errors.nickname}</div>
              ) : null}
            </div>
            <button
              onClick={handleSubmit}
              className={
                errors.nickname
                  ? "text-grayscale-0 bg-grayscale-200 text-base w-100% h-14 border mt-5"
                  : "text-grayscale-0 bg-primary-500 text-base w-100% h-14 border mt-5"
              }
              type="submit"
            >
              입력완료
            </button>
          </Form>
        )}
      </Formik>
    </Page>
  );
}

export default NicknameSelectPage;

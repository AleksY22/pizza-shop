"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../../ui/dialog";
import { Button } from "../../ui";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LoginForm } from "./forms/login-form";
import { RegisterForm } from "./forms/register-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [typeButton, setTypeButton] = useState<"github" | "google">();

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };
  const handleClose = () => {
    onClose();
  };

  const onLoading = (type: string) => {
    if (type === "github") {
      setTypeButton("github");
    } else {
      setTypeButton("google");
    }
    setLoading(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        aria-describedby={undefined}
        className="w-[450px] bg-white p-10"
      >
        <VisuallyHidden asChild>
          <DialogTitle />
        </VisuallyHidden>
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <hr />
        <div className="flex gap-2">
          <Button
            loading={typeButton === "github" && loading}
            variant="secondary"
            onClick={() => {
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              });
              onLoading("github");
            }}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <Image
              className="w-6 h-6"
              width={24}
              height={24}
              alt="github-icon"
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>

          <Button
            variant="secondary"
            loading={typeButton === "google" && loading}
            onClick={() => {
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              });
              onLoading("google");
            }}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <Image
              className="w-6 h-6"
              width={24}
              height={24}
              alt="google-icon"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
        <hr />
        <Button
          variant="outline"
          onClick={onSwitchType}
          type="button"
          className="h-12"
        >
          {type === "login" ? "Регистрация" : "Войти"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

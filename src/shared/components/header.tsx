/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/shared/lib/utils";
import React, { useState } from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "./ui";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch, hasCart, className }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  //для запуска только на клиенте (дебаг ошибки hydration)
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен!";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
    //=====================(дебаг ошибки hydration)
    setIsClient(true);
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-5">
        {/*==========================================================*/}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        {/* ======================================================== */}
        <div className="mx-10 flex-1">{hasSearch && <SearchInput />}</div>
        {/*==========================================================*/}
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          {/* (дебаг ошибки hydration) */}
          {isClient ? (
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          ) : (
            <Button loading={true} className="flex items-center gap-2 w-30" />
          )}

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};

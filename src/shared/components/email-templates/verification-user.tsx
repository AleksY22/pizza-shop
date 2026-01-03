interface Props {
  code: string;
}

export function VerificationUserTemplate({ code }: Props) {
  return (
    <div>
      <p>
        Код подтверждения: <h2>{code}</h2>
      </p>
      <p>
        <a href={`${process.env.MAIN_URL}/api/auth/verify?code=${code}`}>
          Подтвердить регистрацию
        </a>
      </p>
    </div>
  );
}

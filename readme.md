# SMS validation

Generate a SMS code and verify it using twilio

## Generate SMS

**POST** \* `http://localhost:3000/createVerificationSMS`

    {
        areaCode: areaCode,
        phoneNumber: phoneNumber
    }

| Nombre          | Valor  | Descripcion          |
| --------------- | ------ | -------------------- |
| **areaCode**    | numero | _Codigo de area_     |
| **phoneNumber** | numero | _Numero de telefono_ |

## Validate SMS

**GET** \* `http://localhost:3000/verifySMS`

    {
        areaCode: areaCode,
        phoneNumber: phoneNumber,
        code: code
    }

| Nombre          | Valor  | Descripcion              |
| --------------- | ------ | ------------------------ |
| **areaCode**    | numero | _Codigo de area_         |
| **phoneNumber** | numero | _Numero de telefono_     |
| **code**        | numero | _Codigo de verificacion_ |

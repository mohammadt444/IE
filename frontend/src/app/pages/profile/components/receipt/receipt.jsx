import React from "react";
import { toPersian } from "../../../../../helper/functions/utils";
import "./receipt.css";
function Receipt() {
  return (
    <div className="receipt-table_container">
      <table className="receipt-table">
        <tr>
          <th>کد پیگیری</th>
          <th>کالا</th>
          <th>قیمت پرداخت شده</th>
          <th>آدرس ارسال شده</th>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>موس گیمینگ</td>
          <td>{toPersian("10000 تومان")}</td>
          <td>تهران امیرکبیر</td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>موس گیمینگ</td>
          <td>{toPersian("10000 تومان")}</td>
          <td>تهران امیرکبیر</td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>موس گیمینگ</td>
          <td>{toPersian("10000 تومان")}</td>
          <td>تهران امیرکبیر</td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>موس گیمینگ</td>
          <td>{toPersian("10000 تومان")}</td>
          <td>تهران امیرکبیر</td>
        </tr>
      </table>
    </div>
  );
}

export default Receipt;

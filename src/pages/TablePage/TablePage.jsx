import Table from "../../components/Table/Table"

const TablePage = () => {
  return (
    <>
      <Table firstCol={"Компания"}
             secondCol={"Количество сотрудников"}
             thirdCol={"Адрес"}
             purpose={"companies"}
      />
      {/* <Table firstCol={"Фамилия"}
             secondCol={"Имя"}
             thirdCol={"Должность"}
             purpose={"staff"}
      /> */}
    </>
    
  )
}

export default TablePage
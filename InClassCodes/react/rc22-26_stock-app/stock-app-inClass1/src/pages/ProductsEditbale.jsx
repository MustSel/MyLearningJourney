import React, { useState, useEffect, useCallback } from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowModes,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

const ProductsEditable = () => {
  const { getDatas, deleteDatas, editDatas } = useStockRequest();
  const { products, categories, brands } = useSelector((state) => state.getData);
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [productInfo, setProductInfo] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });

  useEffect(() => {
    getDatas("products");
    getDatas("brands");
    getDatas("categories");
  }, []);

  useEffect(() => {
    setRows(
      products.map((product) => ({
        id: product._id,
        category: product.categoryId.name,
        brand: product.brandId.name,
        name: product.name,
        stock: product.quantity,
        product: product,
      }))
    );
  }, [products]);

  const handleEditClick = (id) => () => {
    setRowModesModel((prevModel) => ({ ...prevModel, [id]: { mode: GridRowModes.Edit } }));
  };

  const handleSaveClick = (id) => async () => {
    setRowModesModel((prevModel) => ({ ...prevModel, [id]: { mode: GridRowModes.View } }));
  };

  const handleDeleteClick = (id) => {
    deleteDatas("products", id);
  };

  const handleCancelClick = (id) => {
    setRowModesModel((prevModel) => ({
      ...prevModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }));

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }
  };

  const handleProductInfoChange = useCallback((id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  }, []);

  const processRowUpdate = async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    const updatedProductInfo = {
      categoryId: categories.find((cat) => cat.name === updatedRow.category)._id,
      brandId: brands.find((brand) => brand.name === updatedRow.brand)._id,
      name: updatedRow.name,
    };

    try {
      await editDatas("products", updatedProductInfo, updatedRow.id);
      setRows((prevRows) => prevRows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
    } catch (error) {
      console.error("Error updating the row:", error);
      return newRow;
    }
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "category", headerName: "Category", flex: 1, editable: true },
    { field: "brand", headerName: "Brand", flex: 1, editable: true },
    { field: "name", headerName: "Name", flex: 1, editable: true },
    { field: "stock", headerName: "Stock", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`${params.id}-save`}
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: "primary.main" }}
              onClick={handleSaveClick(params.id)}
            />,
            <GridActionsCellItem
              key={`${params.id}-cancel`}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(params.id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={`${params.id}-edit`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(params.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`${params.id}-delete`}
            icon={<DeleteOutlineIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(params.id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <h2>Products</h2>
      <Button onClick={() => {}} sx={{ mb: "10px" }} variant="contained">
        New Product
      </Button>

      <div style={{ width: "100%", height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          autoHeight
          disableRowSelectionOnClick
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: GridToolbar }}
          onEditCellChangeCommitted={(params) =>
            handleProductInfoChange(params.id, params.field, params.value)
          }
        />
      </div>
    </>
  );
};

export default ProductsEditable;

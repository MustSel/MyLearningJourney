import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import useStockRequest from '../services/useStockRequest';
import { useEffect, useState } from 'react';

function EditToolbar(props) {
  const { setRows, setRowModesModel, rows } = props;

  const handleClick = () => {
    const id = `new-${Math.random().toString(36).substr(2, 9)}`;
    setRows((oldRows) => [...oldRows, { id, categoryId: '', brandId: '', name: '', stock: 0, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        New Product
      </Button>
    </GridToolbarContainer>
  );
}

export default function Products() {
  const { deleteDatas, postDatas, editDatas,getDatas } = useStockRequest();
  const { products, categories, brands } = useSelector((state) => state.getData);

  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    const initialRows = products.map((product) => ({
      id: product._id,
      categoryId: product.categoryId._id,
      category: product.categoryId.name,
      brandId: product.brandId._id,
      brand: product.brandId.name,
      name: product.name,
      stock: product.quantity,
      product: product
    }));
    setRows(initialRows);
  }, [products]);

  useEffect(() => {
    getDatas("products")
    getDatas("brands")
    getDatas("categories")
  }, [])
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleDeleteClick = (id) => async () => {
    await deleteDatas("products", id);
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (updatedRow, originalRow) => {
    const productInfo = {
      categoryId: updatedRow.categoryId,
      brandId: updatedRow.brandId,
      name: updatedRow.name,
    };
    if (updatedRow.isNew) {
      const newProduct = await postDatas("products", productInfo);
      return { ...newProduct, id: newProduct._id, isNew: false };  // Ensure to return the updated row object with the new ID from the server.
    } else {
      await editDatas("products", productInfo, updatedRow.id);
      return updatedRow;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleSaveClick = (id) => async () => {
    const editedRow = rows.find((row) => row.id === id);
    await processRowUpdate(editedRow, editedRow); // Tetikle processRowUpdate fonksiyonunu
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    {
      field: 'categoryId',
      headerName: 'Category',
      width: 200,
      editable: true,
      type: 'singleSelect',
      valueOptions: categories.map((category) => ({
        value: category._id,
        label: category.name,
      })),
      getOptionLabel: (params) => categories.find((category) => category._id === params.value)?.name,
    },
    {
      field: 'brandId',
      headerName: 'Brand',
      width: 200,
      editable: true,
      type: 'singleSelect',
      valueOptions: brands.map((brand) => ({
        value: brand._id,
        label: brand.name,
      })),
      getOptionLabel: (params) => brands.find((brand) => brand._id === params.value)?.name,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, rows },
        }}
      />
    </Box>
  );
}

"use client";

import { useEffect, useState } from "react";
import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc 
} from "firebase/firestore";
import { db } from "../../../../lib/firebaseConfig";
import { 
    Box, 
    TextField, 
    Button,      
    Stack,       
    InputBase, 
    Typography,
    Select,       
    MenuItem,     
    InputLabel,    
    FormControl,   
    IconButton,   
    Paper,         
    Dialog,       
    DialogActions, 
    DialogContent, 
    DialogTitle,  
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const CustomIconButton = styled(IconButton)(({ theme, color }) => ({
  color: color === 'edit' ? theme.palette.success.main : theme.palette.error.main,
  '&:hover': {
    backgroundColor: color === 'edit' ? theme.palette.success.light : theme.palette.error.light,
  },
}));


const ROLES = ['doctor', 'Nurse', 'Patient', 'Pharmacist'];

export default function UsersPage() {
  const [form, setForm] = useState({ name: "", email: "", age:"", role:"" });
  const [open, setOpen]=useState(false)
  const [users, setUsers] = useState([])
  const [editUser , setEditUser] = useState(null)
  const [isLoading , setIsLoading]= useState(false)
  const [search , setSearch] = useState("")

  
  const usersCollection = collection(db, "Users")

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
        const snapshot = await getDocs(usersCollection)
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setUsers(data)
    } catch (error) {
        console.error("Error fetching users: ", error);
    } finally {
        setIsLoading(false);
    }
  }

  const filteredUsers = users.filter(
    item=>
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.age?.toString().toLowerCase().includes(search.toLowerCase()) ||
      item.role?.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => { 
    fetchUsers() 
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const finalData = editUser 
        ? { ...form } 
        : { ...form, role: form.role || 'Patient' }; 

    try {
        if(editUser){
          const userData = doc(db, "Users", editUser.id)
          await updateDoc(userData , finalData)
        } else {
          await addDoc(usersCollection , finalData)
        }
        setForm({ name: "", email: "" ,age:"",role:""});
        setEditUser(null)
        alert("✅ User Updated/Added Successfully!");
        setOpen(false)
        fetchUsers();
    } catch (error) {
        console.error("Error saving user: ", error);
        alert("❌ Failed to save user. Check console for details.");
    }
  };

  const handleDelete = async (id) => {
    try {
        await deleteDoc(doc(db, "Users", id))
        setUsers(users.filter(u => u.id !== id))
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
  }


  const handelEditUser= (user)=>{
    setEditUser(user)
    setForm({
      name:user.name,
      email:user.email,
      age:user.age,
      role:user.role 
    })
    setOpen(true)
  }

  const handleOpenModal = () => {
      setEditUser(null);
      setForm({ name: "", email: "" ,age:"",role:""});
      setOpen(true);
  }

  const handleCloseModal = () => {
      setOpen(false);
      setEditUser(null);
  }

  if (isLoading && users.length === 0) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-600">Loading Users...</div>;
  }

  return (
    <Box sx={{ padding: 4, width: '100%'}}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 , color:'gray'}}>
            Users 
        </Typography>
        
        <Paper sx={{ padding: 2, mb: 3 }}>
            <Stack 
                direction="row" 
                justifyContent="space-between" 
                alignItems="center"
                spacing={2}
            >
                <Box
                    sx={{
                        maxWidth: '350px',
                        width: '100%',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: 'grey.100', 
                        borderRadius: '24px', 
                        paddingLeft: 1.5
                    }}
                >
                    <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                    <InputBase
                        placeholder='Search users by name, email, or role...'
                        inputProps={{ 'aria-label': 'search users' }}
                        sx={{ flex: 1 }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Box>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleOpenModal} 
                    size="large"
                    sx={{ borderRadius: '8px', minWidth: '120px' }}
                >
                    Add User
                </Button>
            </Stack>
        </Paper>

        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
              {filteredUsers.length > 0 ? (
                <Box sx={{ minWidth: 600 }}>
                  <Stack 
                    direction="row" 
                    sx={{ 
                        borderBottom: '1px solid #e0e0e0', 
                        py: 1, 
                        fontWeight: 'bold',
                        bgcolor: 'grey.50'
                    }}
                  >
                      <Box sx={{ width: '25%', px: 2 }}>Name</Box>
                      <Box sx={{ width: '25%', px: 2 }}>Email</Box>
                      <Box sx={{ width: '15%', px: 2 }}>Age</Box>
                      <Box sx={{ width: '15%', px: 2 }}>Role</Box>
                      <Box sx={{ width: '20%', px: 2, textAlign: 'center' }}>Actions</Box>
                  </Stack>
                  
                  {filteredUsers.map((val)=>(
                      <Stack 
                        key={val.id} 
                        direction="row" 
                        sx={{ 
                            borderBottom: '1px solid #e0e0e0', 
                            py: 1.5, 
                            alignItems: 'center'
                        }}
                      >
                          <Box sx={{ width: '25%', px: 2 }}>{val.name}</Box>
                          <Box sx={{ width: '25%', px: 2 }}>{val.email}</Box>
                          <Box sx={{ width: '15%', px: 2 }}>{val.age}</Box>
                          <Box sx={{ width: '15%', px: 2 }}>{val.role}</Box>
                          <Box sx={{ width: '20%', px: 2, textAlign: 'center' }}>


                            <CustomIconButton color="edit" onClick={() => handelEditUser(val)}>
                                <EditIcon />
                            </CustomIconButton>
                            
                            <CustomIconButton color="delete" onClick={() => handleDelete(val.id)}>
                                <DeleteIcon />
                            </CustomIconButton>
                          </Box>
                      </Stack>
                  ))}
                </Box>
              ) : (
                <Typography variant="body1" align="center" sx={{ p: 4 }}>
                    No users found or list is empty.
                </Typography>
              )}
        </Paper>
        
        <Dialog open={open} onClose={handleCloseModal} fullWidth maxWidth="sm">
            <DialogTitle>{editUser ? "Edit User" : "Add New User"}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent dividers>
                    <Stack spacing={3}> 
                        <TextField
                            label="Name"
                            type="string"
                            variant="outlined"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            fullWidth
                            required
                        />

                        <TextField
                            label="Email"
                            variant="outlined"
                            type="string"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            fullWidth
                            required
                        />
                        
                        <TextField
                            label="Age"
                            variant="outlined"
                            type="number"
                            value={form.age}
                            onChange={(e) => setForm({ ...form, age: e.target.value })}
                            fullWidth
                            required
                        />
                        
                        <FormControl required>
                            <InputLabel id="role-select-label">Role</InputLabel>
                            <Select
                                labelId="role-select-label"
                                id="role-select"
                                value={form.role || ''} 
                                label="Role"
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                            >
                                {ROLES.map((role) => (
                                    <MenuItem key={role} value={role}>
                                        {role}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="contained" color="primary">
                        {editUser ? "Save Changes" : "Add User"}
                    </Button>
                    <Button onClick={handleCloseModal} variant="outlined" color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    </Box>
  );
}

'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Link as MuiLink,
  Stack,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Login logic will go here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <Card className="w-full max-w-md bg-gray-800 text-white shadow-2xl border border-gray-700">
        <CardContent className="p-8">
          <Box className="flex flex-col items-center mb-8">
            <div className="bg-indigo-600 p-3 rounded-xl mb-4 shadow-lg shadow-indigo-500/20">
              <Lock className="text-white text-3xl" />
            </div>
            <Typography variant="h4" className="font-bold text-white mb-2">
              Welcome Back
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Please enter your details to sign in
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="standard"
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email className="text-gray-500" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  '& .MuiInput-root': {
                    color: 'white',
                    fontFamily: 'inherit',
                    '&:before': { borderBottomColor: '#374151' },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottomColor: '#6366f1',
                    },
                    '&:after': { borderBottomColor: '#6366f1' },
                  },
                  '& .MuiInputLabel-root': { color: '#9ca3af' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#6366f1' },
                }}
              />

              <Box>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  variant="standard"
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock className="text-gray-500" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            className="text-gray-500"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    '& .MuiInput-root': {
                      color: 'white',
                      fontFamily: 'inherit',
                      '&:before': { borderBottomColor: '#374151' },
                      '&:hover:not(.Mui-disabled):before': {
                        borderBottomColor: '#6366f1',
                      },
                      '&:after': { borderBottomColor: '#6366f1' },
                    },
                    '& .MuiInputLabel-root': { color: '#9ca3af' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#6366f1' },
                  }}
                />
                <Box className="flex justify-end mt-2">
                  <MuiLink
                    href="#"
                    className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors underline-none"
                  >
                    Forgot password?
                  </MuiLink>
                </Box>
              </Box>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isLoading}
                className="bg-indigo-600 hover:bg-indigo-700 py-3 text-lg font-bold shadow-lg shadow-indigo-500/30 normal-case rounded-xl transition-all duration-300"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </Stack>
          </form>

          <Box className="mt-8 pt-6 border-t border-gray-700 text-center">
            <Typography variant="body2" className="text-gray-400">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
              >
                Sign up free
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

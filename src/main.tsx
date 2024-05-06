import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import Author from './pages/author/author.page.tsx'
import PostPage from './pages/post/post.page.tsx'
import { GlobalStyle } from './style/createGlobalStyle.ts'
import { theme } from './style/theme.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/post/:id",
    element: <PostPage />
  },
  {
    path: "/author",
    element: <Author />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)

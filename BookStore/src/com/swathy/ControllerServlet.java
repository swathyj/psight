package com.swathy;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ControllerServlet
 */
@WebServlet("/ControllerServlet")
public class ControllerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static ArrayList<Book> bookList= new ArrayList<Book>();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ControllerServlet() {
        super();
        bookList.add(new Book(1,"The Alchemist","Paulo Coelo"));
        bookList.add(new Book(2,"The Monk Who Sold His Ferrari","Robin Sharma"));
        bookList.add(new Book(3,"Angels and Demons","Dan Brown"));
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//PrintWriter pw= response.getWriter();
	//	 HttpSession session=request.getSession(true);
		request.setAttribute("book_list", bookList);
		log("swww"+bookList.size());
	//	session.setAttribute("bookL_List", request.getAttribute("book_list")); 		
		
		  RequestDispatcher dispatcher = request.getRequestDispatcher("/Books.jsp");
		  dispatcher.forward(request, response);
		 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}

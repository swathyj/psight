<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="com.swathy.*"%>
<%@ page import="java.util.ArrayList"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page isELIgnored="false"%>
<html>
<head>
<title>Books</title>
</head>
<body>
	<%-- JSTL set example--%>
	<c:set var="stuff" value="<%= new java.util.Date() %>" />
	Time is ${stuff}

	<%-- JSTL forEach sample --%>
	<c:forEach var="item" items="${book_list}">
		<p>Book :${item.title}</p>
	</c:forEach>
</body>
</html>
"use strict";
import React from "react";
import { useState, useEffect } from "react";
import { Router } from "next/navigation";
import Cookies from "js-cookie";
import { login } from "@/lib/api";

export default function LoginComponent() {
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState([]);
    const [mounted, setMounted] = useState(false);
    const router = Router;

    useEffect6(() => {
        setMounted(true);
    }, []);

    const
}
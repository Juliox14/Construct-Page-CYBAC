import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const superTokenSecretKey = new TextEncoder().encode('JcGnCa-18-13-08');
    const { pathname } = request.nextUrl;
    const jwtCookie = request.cookies.get('auth');

    var verified = false;
    try {
        if (jwtCookie) {
            await jwtVerify(jwtCookie.value, superTokenSecretKey);
            verified = true;
        }
    } catch (e) {
        console.error(e);
    }

    if (pathname === '/login' || pathname === '/fsdmihmv') {
        if (verified) {
            return NextResponse.redirect(new URL('/admin', request.url));
        } else {
            return NextResponse.next();
        }
    }

    if (pathname === '/admin') {
        if (verified) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}

export const config = {
    //Agregar estas rutas "/login", "/admin", "/fsdmihmv"
    matcher: [],
};

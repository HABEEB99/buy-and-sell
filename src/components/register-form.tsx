"use client";

import React from "react";
import * as z from "zod";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-full h-full md:w-[500px] shadow-lg">
      <CardHeader className="flex items-center justify-center w-full">
        <CardTitle>Register</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(() => {})}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="input your name"
                        type="text"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john-doe@gmail.com"
                        type="email"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="***********"
                        type="password"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button variant="main" className="w-full" type="submit">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="w-full flex items-center justify-center">
        <span className="text-xs text-muted-foreground">
          Already registered?
          <Link
            href="/login"
            className="text-btn/80 hover:text-btn ml-2 font-bold"
          >
            Login
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

"use client";

import Link from "next/link";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook } from "lucide-react";

import { LoginSchema } from "@/schemas";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <Card className="w-full h-full md:w-[500px] shadow-lg">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-sm self-center w-full">
          Please login through the channels below
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(() => {})}>
            <div className="space-y-4">
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
                        placeholder="*************"
                        type="password"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full bg-btn text-white">Login</Button>
          </form>
        </Form>
      </CardContent>

      <div className="flex items-center justify-center px-4 my-4">
        <div className="border-[1px] border-gray-300 w-full mx-2" /> OR{" "}
        <div className="border-[1px] border-gray-300 w-full mx-2" />
      </div>

      <CardFooter className="gap-3">
        <Button
          variant="outline"
          className="w-full hover:bg-red-500 hover:text-white font-extrabold text-red-700"
        >
          G
        </Button>

        <Button
          variant="outline"
          className="w-full hover:bg-blue-500 hover:text-white group"
        >
          <Facebook className="w-4 h-4 text-blue-600 group-hover:text-white" />
        </Button>
      </CardFooter>

      <CardFooter>
        <span className="text-xs text-muted-foreground">
          Don&apos;t have an account yet?
          <Link
            href="/register"
            className="text-btn/80 hover:text-btn ml-2 font-bold"
          >
            Register
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

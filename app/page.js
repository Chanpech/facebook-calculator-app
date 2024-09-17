"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">Simplest Working Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-3xl font-semibold text-center bg-secondary p-3 rounded-md">
            {result}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input
            ref={inputRef}
            type="number"
            placeholder="Type a number"
            className="w-full text-lg"
          />
          <div className="grid grid-cols-2 gap-3">
            <Button onClick={plus}>Add</Button>
            <Button onClick={minus}>Subtract</Button>
            <Button onClick={times}>Multiply</Button>
            <Button onClick={divide}>Divide</Button>
            <Button onClick={resetResult} variant="destructive">Reset Result</Button>
            <Button onClick={resetInput} variant="outline">Reset Input</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  );
}

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Visibility } from "@/features/camp/types/camp.types";
import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Input, Textarea } from "../ui/Input";
import { useCreateCamp } from "@/features/camp/hooks/camp.hooks";
import { useMe } from "@/features/auth/hooks/auth.hooks";

type NewCampProps = {
  onClose: () => void;
};

export default function NewCamp({ onClose }: NewCampProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [visibility, setVisibility] = useState(Visibility.PUBLIC);
  const [tagsStr, setTagsStr] = useState("");

  const {isPending, mutate}  = useCreateCamp();
  const { data } = useMe()

  // if()

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // useEffect(() => {
  //   const previousOverflow = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = previousOverflow;
  //   };
  // }, []);

  const parsedTagsStr = useMemo(() => {
    return tagsStr
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }, [tagsStr]);


  const handleSubmit = () => {

    // validating all the fields

    // if(formData.get("name"))

    const tags = tagsStr.split(",").map(item => item.trim())

    mutate({name, slug, description, avatarUrl, visibility, ownerId: data?.user.id, tags}, {
      onSuccess: () => {
        console.log("New Camp created")
        onClose()
      }
    })
  }

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      <Card
        className="relative z-10 w-full max-w-2xl border-border/70 bg-surface-1/90 shadow-[0_24px_80px_rgba(8,15,31,0.55)]"
      >
        <CardHeader className="flex-row items-start justify-between gap-4 border-b border-border/60 p-5 md:p-6">
          <div>
            <CardTitle className="text-lg md:text-xl">Add a new camp</CardTitle>
            <CardDescription className="mt-1 text-sm">
              Fill in the details to create a camp that fits the existing Camp theme.
            </CardDescription>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close modal"
            className="h-9 w-9 rounded-full"
          >
            <X size={16} />
          </Button>
        </CardHeader>

        <CardContent className="p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 id">
            <Input
              label="Name"
              placeholder="Frontend Guild"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              label="Slug"
              placeholder="frontend-guild"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              hint="Used in the camp URL"
            />
            <div className="md:col-span-2">
              <Textarea
                label="Description"
                placeholder="A private space for the product design and frontend team."
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Avatar URL"
                placeholder="https://..."
                value={avatarUrl}
                onChange={(event) => setAvatarUrl(event.target.value)}
                hint="Optional image for the camp badge"
              />
            </div>
            <label className="flex flex-col gap-1.5 md:col-span-1">
              <span className="text-[12px] font-medium text-text-secondary">Visibility</span>
              <select
                value={visibility}
                onChange={(event) => setVisibility(Number(event.target.value) as Visibility)}
                className="bg-surface-1 border border-border rounded-md text-[13px] text-text-secondary px-3 py-2 outline-none transition-all duration-150 focus:border-accent focus:ring-2 focus:ring-accent/10"
              >
                <option value={Visibility.PUBLIC}>Public</option>
                <option value={Visibility.PRIVATE}>Private</option>
                <option value={Visibility.INVITE_ONLY}>Invite only</option>
              </select>
            </label>
            <Input
              label="TagsStr"
              placeholder="Frontend, Hackathon, Open Source"
              value={tagsStr}
              onChange={(event) => setTagsStr(event.target.value)}
              hint={`${parsedTagsStr.length} tag${parsedTagsStr.length === 1 ? "" : "s"} ready`}
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-border/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div />
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="secondary" size="sm" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" onClick={handleSubmit}>
                Create camp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
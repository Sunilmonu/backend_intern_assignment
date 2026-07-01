from rest_framework.permissions import BasePermission


class IsOwnerOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Admin has full access
        if request.user.role == "admin":
            return True

        # Owner has access
        return obj.created_by == request.user